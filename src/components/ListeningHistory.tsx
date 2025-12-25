"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { ListeningHistoryPage, useListeningHistoryPaginated } from "@/hooks/useListeningHistory";

import { ListDetailWrapper } from "./ListDetailWrapper";
import { LoadingSpinner } from "./ui";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Check on mount
    checkMobile();

    // Listen for resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

interface ListeningHistoryProps {
  initialData?: ListeningHistoryPage[];
}

interface ListeningHistoryRowProps {
  item: {
    name: string;
    artist: string;
    album: string;
    image?: string;
    url?: string;
    audioUrl?: string;
    playedAt: string;
  };
}

const isAudioUrl = (url?: string) => {
  if (!url) return false;
  const path = url.split("?")[0].toLowerCase();
  return (
    path.endsWith(".mp3") ||
    path.endsWith(".wav") ||
    path.endsWith(".m4a") ||
    path.endsWith(".aac") ||
    path.endsWith(".ogg") ||
    path.endsWith(".flac")
  );
};

function ListeningHistoryRow({ item }: ListeningHistoryRowProps) {
  const [imageError, setImageError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const audioUrl = item.audioUrl || item.url;
    if (!audioUrl || !isAudioUrl(audioUrl)) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const showPlayButton = isAudioUrl(item.audioUrl) || isAudioUrl(item.url);

  return (
    <div className="group flex h-full gap-3 px-4 py-3 md:items-center md:gap-4 md:py-1">
      {item.url && (
        showPlayButton ? (
          <button
            onClick={togglePlay}
            className="absolute inset-0 rounded-lg z-0 cursor-pointer bg-transparent outline-none"
            aria-label={`Play ${item.name}`}
          />
        ) : (
          <Link target="_blank" href={item.url} className="absolute inset-0 z-0" />
        )
      )}

      {/* Image - shown on mobile, hidden on desktop */}
      <div className="relative size-12 flex-none md:hidden">
        {item.image && !imageError ? (
          <Image
            width={48}
            height={48}
            src={item.image}
            alt=""
            className="size-12 rounded-lg object-cover ring-[0.5px] ring-black/10 dark:ring-white/10"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="bg-tertiary size-12 rounded-lg" />
        )}
        {showPlayButton && (
          <div
            className={clsx(
              "absolute inset-0 flex items-center justify-center bg-black/30 text-white rounded-lg transition-opacity",
              isPlaying ? "opacity-100" : "opacity-100 md:opacity-0 md:group-hover:opacity-100"
            )}
          >
            {isPlaying ? (
              <svg className="size-6 fill-current animate-pulse" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="size-6 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        )}
      </div>

      {/* Song name + Artist (mobile), Song column (desktop) */}
      <div className="min-w-0 flex-1 md:flex md:min-w-[200px] md:items-center md:gap-3">
        {/* Image - hidden on mobile, shown on desktop */}
        <div className="relative hidden size-8 flex-none md:block">
          {item.image && !imageError ? (
            <Image
              width={32}
              height={32}
              src={item.image}
              alt=""
              className="size-8 rounded-md object-cover ring-[0.5px] ring-black/5 dark:ring-white/5"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="bg-tertiary size-8 rounded-md" />
          )}
          {showPlayButton && (
            <div
              className={clsx(
                "absolute inset-0 flex items-center justify-center bg-black/30 text-white rounded-md transition-opacity",
                isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}
            >
              {isPlaying ? (
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <span className="text-primary block truncate font-medium">{item.name}</span>
            <div className="text-tertiary truncate md:hidden">{item.artist}</div>
          </div>
          {/* Mobile-only Play Indicator */}
          {showPlayButton && (
            <div className="flex-none md:hidden">
              {isPlaying ? (
                <div className="flex items-center gap-0.5 h-3">
                  <div className="w-1 bg-blue-500 animate-[music-bar_0.5s_ease-in-out_infinite]" />
                  <div className="w-1 bg-blue-500 animate-[music-bar_0.7s_ease-in-out_infinite]" />
                  <div className="w-1 bg-blue-500 animate-[music-bar_0.6s_ease-in-out_infinite]" />
                </div>
              ) : (
                <div className="p-2 rounded-full bg-secondary/50">
                  <svg className="size-4 fill-secondary" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Desktop-only columns */}
      <div className="text-tertiary hidden min-w-[150px] flex-1 truncate md:block">
        {item.artist}
      </div>
      <div className="text-tertiary hidden min-w-[150px] flex-1 truncate md:block">
        {item.album}
      </div>
      <div className="text-tertiary hidden min-w-[120px] whitespace-nowrap md:block">
        {new Date(item.playedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </div>
    </div>
  );
}

function LoaderRow({ isReachingEnd }: { isReachingEnd: boolean }) {
  return (
    <div className="flex h-full items-center justify-center">
      {!isReachingEnd ? <LoadingSpinner /> : null}
    </div>
  );
}

export function ListeningHistory({ initialData }: ListeningHistoryProps = {}) {
  const {
    items: music,
    isLoading,
    isLoadingMore,
    isError,
    setSize,
    size,
    isReachingEnd,
  } = useListeningHistoryPaginated(initialData);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const hasTriggeredLoad = useRef(false);
  const isMobile = useIsMobile();

  // eslint-disable-next-line react-hooks/incompatible-library
  const virtualizer = useVirtualizer({
    count: !isReachingEnd ? music.length + 1 : music.length, // Add 1 for loader row if more data available
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => (isMobile ? 72 : 56), // Mobile: 64px (py-3 + 40px image + text), Desktop: 40px
    overscan: 10, // Render 10 extra items outside viewport for smooth scrolling
  });

  const items = virtualizer.getVirtualItems();

  // Recalculate virtualizer measurements when viewport size changes
  useEffect(() => {
    virtualizer.measure();
  }, [isMobile, virtualizer]);

  // Reset trigger when loading completes (isLoadingMore goes from true to false)
  useEffect(() => {
    if (!isLoadingMore && hasTriggeredLoad.current) {
      hasTriggeredLoad.current = false;
    }
  }, [isLoadingMore]);

  // Effect to load more items when the loader row becomes visible
  useEffect(() => {
    const loaderItemVisible = items.some((item) => item.index === music.length);

    if (
      loaderItemVisible &&
      !isReachingEnd &&
      !isLoading &&
      !isLoadingMore &&
      !hasTriggeredLoad.current
    ) {
      hasTriggeredLoad.current = true;
      setSize(size + 1);
    }
  }, [items, music.length, isReachingEnd, isLoading, isLoadingMore, size, setSize]);

  if (isLoading && music.length === 0) {
    return (
      <ListDetailWrapper>
        <div className="flex h-full flex-1 items-center justify-center">
          <LoadingSpinner />
        </div>
      </ListDetailWrapper>
    );
  }

  if (isError) {
    return (
      <ListDetailWrapper>
        <div className="flex h-full w-full flex-1 items-center justify-center">
          <div className="text-secondary">Error loading music data</div>
        </div>
      </ListDetailWrapper>
    );
  }

  return (
    <ListDetailWrapper>
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Scrollable content area */}
        <div ref={scrollContainerRef} className="relative flex-1 overflow-auto">
          <div className="min-w-fit">
            {/* Table Header - Desktop only */}
            <div className="bg-secondary border-secondary sticky top-0 z-10 hidden border-b md:block dark:bg-neutral-950">
              <div className="flex gap-4 px-4 py-2 text-sm font-medium">
                <div className="min-w-[200px] flex-1 text-left">Song</div>
                <div className="min-w-[150px] flex-1 text-left">Artist</div>
                <div className="min-w-[150px] flex-1 text-left">Album</div>
                <div className="min-w-[120px] text-left">Played</div>
              </div>
            </div>

            {/* Virtualized Content */}
            <div
              style={{
                height: `${virtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
              {items.map((virtualItem) => {
                const isLoaderRow = virtualItem.index > music.length - 1;
                const item = music[virtualItem.index];

                return (
                  <div
                    key={virtualItem.key}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: `${virtualItem.size}px`,
                      transform: `translateY(${virtualItem.start}px)`,
                    }}
                    className="border-secondary hover:bg-secondary relative border-b dark:hover:bg-white/5"
                  >
                    {isLoaderRow ? (
                      <LoaderRow isReachingEnd={isReachingEnd} />
                    ) : item ? (
                      <ListeningHistoryRow item={item} />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ListDetailWrapper>
  );
}
