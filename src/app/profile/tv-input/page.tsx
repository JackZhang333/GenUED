/* eslint-disable @next/next/no-img-element -- Preserve original Figma vector geometry and local case-study assets. */
import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "五键输入法 — 智能电视搜索体验重塑 | Johnny Zhang",
  description:
    "TCL × Rakuten 智能电视五键输入法案例：从竞品调研、编码映射到可用性测试，重塑遥控器搜索体验。",
};

export default function TvInputCasePage() {
  return (
    <main
      lang="zh-CN"
      className="min-h-screen bg-[#0d0d0d] font-sans text-white selection:bg-[#e1251b] selection:text-white"
    >
      <article className="mx-auto flex max-w-[1528px] flex-col gap-px bg-[#333] [&>section]:scroll-mt-16">
        <CoverHero />
        <nav
          aria-label="案例章节"
          className="flex flex-wrap gap-x-6 gap-y-3 bg-[#0d0d0d] px-6 py-5 text-sm text-[#a0a0a0] sm:px-10 xl:px-20 [&_a]:rounded [&_a]:underline-offset-4 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-white [&_a:hover]:text-white [&_a:hover]:underline"
        >
          <a href="#problem-statement">问题</a>
          <a href="#competitive-research">竞品调研</a>
          <a href="#design-solution">设计方案</a>
          <a href="#interaction-flow">交互流程</a>
          <a href="#tv-mockup-showcase">产品界面</a>
          <a href="#testing-results">测试与成果</a>
        </nav>
        <ProblemStatement />
        <CompetitiveResearch />
        <DesignSolution />
        <InteractionFlow />
        <TvMockupShowcase />
        <TestingResults />
      </article>
      <footer className="mx-auto flex max-w-[1528px] flex-wrap justify-between gap-6 border-t border-[#262626] px-6 py-12 text-sm text-[#a0a0a0] sm:px-10 xl:px-20">
        <a href="/profile" className="text-white underline-offset-4 hover:underline">
          ← 返回 Profile
        </a>
        <a href="#cover-hero" className="underline-offset-4 hover:underline">
          回到顶部 ↑
        </a>
      </footer>
    </main>
  );
}

function CoverHero() {
  return (
    <section
      className="relative flex min-h-[800px] w-full flex-col overflow-hidden bg-[#0d0d0d] xl:h-[900px]"
      data-node-id="20:6"
      id="cover-hero"
    >
      <div
        className="flex w-full flex-wrap items-center justify-between gap-6 px-6 py-8 sm:px-10 xl:px-20"
        data-node-id="20:7"
        data-name="Header"
      >
        <div
          className="relative flex shrink-0 items-center gap-[8px]"
          data-node-id="20:8"
          data-name="BrandLogo"
        >
          <div
            className="relative size-[12px] shrink-0 rounded-[2px] bg-[#e1251b]"
            data-node-id="20:9"
            data-name="Rectangle"
          />
          <p className="relative shrink-0 text-[14px] font-bold text-white" data-node-id="20:10">
            <a
              href="/profile"
              className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              ← PROFILE
            </a>
          </p>
        </div>
        <div
          className="flex flex-wrap gap-x-8 gap-y-2 text-[13px]"
          data-node-id="20:11"
          data-name="MetaTags"
        >
          <div
            className="relative flex shrink-0 items-center gap-[8px]"
            data-node-id="20:12"
            data-name="Frame"
          >
            <p className="relative shrink-0 font-normal text-[#666]" data-node-id="20:13">
              ROLE:
            </p>
            <p className="relative shrink-0 font-medium text-[#a0a0a0]" data-node-id="20:14">
              产品设计 / 用户研究
            </p>
          </div>
          <div
            className="relative flex shrink-0 items-center gap-[8px]"
            data-node-id="20:15"
            data-name="Frame"
          >
            <p className="relative shrink-0 font-normal text-[#666]" data-node-id="20:16">
              YEAR:
            </p>
            <p className="relative shrink-0 font-medium text-[#a0a0a0]" data-node-id="20:17">
              2014
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex w-full flex-1 flex-col items-center gap-8 px-6 pt-10 pb-16 sm:px-10 xl:flex-row xl:gap-16 xl:pr-0 xl:pb-20 xl:pl-20"
        data-node-id="20:18"
        data-name="HeroBody"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[40px] xl:w-[640px]"
          data-node-id="20:19"
          data-name="TitleCol"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
            data-node-id="20:20"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 text-[16px] font-bold text-[#e1251b]"
              data-node-id="20:21"
            >
              TCL × RAKUTEN 北美智能电视盒子项目
            </p>
            <h1
              className="relative w-full min-w-full shrink-0 text-[40px] leading-[1.15] font-bold text-white sm:text-[52px] xl:text-[64px]"
              data-node-id="20:22"
            >
              五键输入法 — 智能电视搜索体验重塑
            </h1>
          </div>
          <div
            className="relative h-px w-full shrink-0 bg-[#262626] opacity-30"
            data-node-id="20:23"
            data-name="Divider"
          />
          <div
            className="relative flex w-full shrink-0 flex-col items-start"
            data-node-id="20:24"
            data-name="Frame"
          >
            <p
              className="relative w-full shrink-0 text-[15px] leading-[1.6] font-normal text-[#a0a0a0]"
              data-node-id="20:25"
            >
              探索在遥控器物理按键极限约束下，如何实现遥控器、屏幕虚拟键盘与大屏视觉的最佳契合。彻底重塑北美千万级用户的智能电视搜索痛点。
            </p>
          </div>
        </div>
        <div
          className="relative min-h-[360px] w-full flex-1 self-stretch sm:min-h-[480px] xl:min-h-0 xl:w-auto"
          data-node-id="20:26"
          data-name="HeroImageArea"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <img
              alt="TCL 智能电视与客厅场景"
              className="absolute size-full max-w-none object-cover"
              src="/profile/assets/tv-input/hero-image-area.png"
            />
            <div className="absolute inset-0 bg-[linear-gradient(137deg,#0d0d0d_25%,transparent_40%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemStatement() {
  return (
    <section
      className="relative flex w-full shrink-0 flex-col items-start gap-12 bg-[#0d0d0d] px-6 py-20 sm:px-10 xl:min-h-[1400px] xl:gap-20 xl:px-20 xl:py-[120px]"
      data-node-id="20:28"
      id="problem-statement"
    >
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
        data-node-id="20:29"
        data-name="Frame"
      >
        <p className="relative shrink-0 text-[14px] font-bold text-[#e1251b]" data-node-id="20:30">
          THE PROBLEM
        </p>
        <h2
          className="relative w-full min-w-full shrink-0 text-4xl font-bold text-white xl:text-5xl"
          data-node-id="20:31"
        >
          问题
        </h2>
        <div
          className="relative h-px w-full shrink-0 bg-[#262626] opacity-20"
          data-node-id="20:32"
          data-name="Divider"
        />
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-8 xl:flex-row xl:gap-16"
        data-node-id="20:33"
        data-name="Frame"
      >
        <p
          className="relative w-full shrink-0 text-[24px] leading-[1.6] font-light text-white xl:w-[480px]"
          data-node-id="20:34"
        >
          输入效率极低：系统默认的虚拟键盘结合遥控器光标移动加点选的方式，操作繁琐且耗时。
        </p>
        <p
          className="relative min-w-0 flex-[1_0_0] text-[16px] leading-[1.8] font-normal text-[#a0a0a0]"
          data-node-id="20:35"
        >
          智能电视的出现让互联网海量内容涌入大屏。然而，用户在电视上搜索内容时却面临着极其割裂的交互体验。传统电视遥控器设计只保留了基本的上下左右与确定键，当面对包含26个字母的全键盘时，每一次搜索都意味着一段冗长的“荒野漫游”。
        </p>
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[40px] rounded-[16px] border border-solid border-[#262626] bg-[#161616] p-5 sm:p-8 xl:p-12"
        data-node-id="20:36"
        data-name="DataVisualization"
      >
        <p
          className="relative w-full shrink-0 text-[22px] font-bold text-white"
          data-node-id="20:37"
        >
          搜索输入操作负荷对比
        </p>
        <div
          className="relative grid w-full shrink-0 grid-cols-1 items-start gap-8 sm:grid-cols-2 xl:grid-cols-4"
          data-node-id="20:38"
          data-name="Frame"
        >
          <div
            className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#161616] p-[24px]"
            data-node-id="20:39"
            data-name="StatBlock"
          >
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] font-medium text-[#a0a0a0]"
              data-node-id="20:40"
            >
              手机端搜索同一电影按键次数
            </p>
            <div
              className="relative flex shrink-0 items-baseline gap-[4px]"
              data-node-id="20:41"
              data-name="ValueRow"
            >
              <p
                className="relative shrink-0 text-4xl font-bold text-[#e1251b] xl:text-5xl"
                data-node-id="20:42"
              >
                19
              </p>
              <p
                className="relative shrink-0 text-[16px] font-medium text-[#666]"
                data-node-id="20:43"
              >
                次按键
              </p>
            </div>
          </div>
          <div
            className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#161616] p-[24px]"
            data-node-id="20:44"
            data-name="StatBlock"
          >
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] font-medium text-[#a0a0a0]"
              data-node-id="20:45"
            >
              电视端全键盘搜索同一电影按键次数
            </p>
            <div
              className="relative flex shrink-0 items-baseline gap-[4px]"
              data-node-id="20:46"
              data-name="ValueRow"
            >
              <p
                className="relative shrink-0 text-4xl font-bold text-[#e1251b] xl:text-5xl"
                data-node-id="20:47"
              >
                62
              </p>
              <p
                className="relative shrink-0 text-[16px] font-medium text-[#666]"
                data-node-id="20:48"
              >
                次按键
              </p>
            </div>
          </div>
          <div
            className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#161616] p-[24px]"
            data-node-id="20:49"
            data-name="StatBlock"
          >
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] font-medium text-[#a0a0a0]"
              data-node-id="20:50"
            >
              操作复杂度（电视 vs 手机）
            </p>
            <div
              className="relative flex shrink-0 items-baseline gap-[4px]"
              data-node-id="20:51"
              data-name="ValueRow"
            >
              <p
                className="relative shrink-0 text-4xl font-bold text-[#e1251b] xl:text-5xl"
                data-node-id="20:52"
              >
                3.3
              </p>
              <p
                className="relative shrink-0 text-[16px] font-medium text-[#666]"
                data-node-id="20:53"
              >
                倍
              </p>
            </div>
          </div>
          <div
            className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#161616] p-[24px]"
            data-node-id="20:54"
            data-name="StatBlock"
          >
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] font-medium text-[#a0a0a0]"
              data-node-id="20:55"
            >
              平均耗时（电视 vs 手机）
            </p>
            <div
              className="relative flex shrink-0 items-baseline gap-[4px]"
              data-node-id="20:56"
              data-name="ValueRow"
            >
              <p
                className="relative shrink-0 text-4xl font-bold text-[#e1251b] xl:text-5xl"
                data-node-id="20:57"
              >
                4.1
              </p>
              <p
                className="relative shrink-0 text-[16px] font-medium text-[#666]"
                data-node-id="20:58"
              >
                倍
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
          data-node-id="20:59"
          data-name="HorizontalBars"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="20:60"
            data-name="Frame"
          >
            <div
              className="relative flex w-full shrink-0 flex-wrap items-start justify-between gap-x-4 gap-y-2 text-[14px]"
              data-node-id="20:61"
              data-name="Frame"
            >
              <p
                className="relative min-w-0 flex-1 font-normal text-[#a0a0a0]"
                data-node-id="20:62"
              >{`在手机上搜索一部电影标题 (例: 'The Shawshank Redemption')`}</p>
              <p className="relative shrink-0 font-bold text-white" data-node-id="20:63">
                19次操作
              </p>
            </div>
            <div
              className="relative flex h-[16px] w-full shrink-0 items-start overflow-clip rounded-[4px] bg-[#262626]"
              data-node-id="20:64"
              data-name="Frame"
            >
              <div
                className="h-full w-[16%] rounded bg-[#666]"
                data-node-id="20:65"
                data-name="Rectangle"
              />
            </div>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="20:66"
            data-name="Frame"
          >
            <div
              className="relative flex w-full shrink-0 flex-wrap items-start justify-between gap-x-4 gap-y-2 text-[14px]"
              data-node-id="20:67"
              data-name="Frame"
            >
              <p
                className="relative min-w-0 flex-1 font-normal text-[#a0a0a0]"
                data-node-id="20:68"
              >
                在电视虚拟键盘上完成同样输入（含光标移动）
              </p>
              <p className="relative shrink-0 font-bold text-[#e1251b]" data-node-id="20:69">
                62次操作
              </p>
            </div>
            <div
              className="relative flex h-[16px] w-full shrink-0 items-start overflow-clip rounded-[4px] bg-[#262626]"
              data-node-id="20:70"
              data-name="Frame"
            >
              <div
                className="h-full w-[53%] rounded bg-[#e1251b]"
                data-node-id="20:71"
                data-name="Rectangle"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-center gap-8 xl:flex-row xl:gap-16"
        data-node-id="20:72"
        data-name="PainDiagramSection"
      >
        <div
          className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-[#262626] bg-[#161616] p-4 py-10 xl:h-[340px] xl:w-[640px]"
          data-node-id="20:73"
          data-name="VisualDiagram"
        >
          <div
            className="relative flex shrink-0 flex-wrap items-center justify-center gap-[12px]"
            data-node-id="20:74"
            data-name="DiagramHeader"
          >
            <p
              className="relative w-full min-w-0 text-center text-xs font-semibold text-white sm:text-sm"
              data-node-id="20:76"
            >
              QWERTY 全键盘遥控漫游耗时痛点示意
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-center gap-[6px]"
            data-node-id="20:77"
            data-name="KeyboardGrid"
          >
            <div
              className="relative flex shrink-0 items-start gap-1 sm:gap-[6px]"
              data-node-id="20:78"
              data-name="Frame"
            >
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:79"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:80"
                >
                  Q
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:81"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:82"
                >
                  W
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:83"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:84"
                >
                  E
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#e1251b] bg-[#e1251b] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:85"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:86"
                >
                  R
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#e1251b] bg-[#e1251b] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:87"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:88"
                >
                  T
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:89"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:90"
                >
                  Y
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:91"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:92"
                >
                  U
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:93"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:94"
                >
                  I
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:95"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:96"
                >
                  O
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:97"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:98"
                >
                  P
                </p>
              </div>
            </div>
            <div
              className="relative flex shrink-0 items-start gap-1 sm:gap-[6px]"
              data-node-id="20:99"
              data-name="Frame"
            >
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:100"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:101"
                >
                  A
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#e1251b] bg-[#e1251b] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:102"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:103"
                >
                  S
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:104"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:105"
                >
                  D
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:106"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:107"
                >
                  F
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:108"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:109"
                >
                  G
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:110"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:111"
                >
                  H
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:112"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:113"
                >
                  J
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:114"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:115"
                >
                  K
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:116"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:117"
                >
                  L
                </p>
              </div>
            </div>
            <div
              className="relative flex shrink-0 items-start gap-1 sm:gap-[6px]"
              data-node-id="20:118"
              data-name="Frame"
            >
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:119"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:120"
                >
                  Z
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:121"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:122"
                >
                  X
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:123"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:124"
                >
                  C
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:125"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:126"
                >
                  V
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:127"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:128"
                >
                  B
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:129"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:130"
                >
                  N
                </p>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] border border-solid border-[#262626] bg-[#0d0d0d] px-[6px] py-[8px] sm:px-3"
                data-node-id="20:131"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[12px] font-bold text-white"
                  data-node-id="20:132"
                >
                  M
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative flex shrink-0 items-center"
            data-node-id="20:133"
            data-name="Frame"
          >
            <p
              className="relative w-full min-w-0 text-center text-[12px] font-normal text-[#666]"
              data-node-id="20:134"
            >
              光标往复移动轨迹: [S] ➔ → → → → → → ➔ [H] ➔ → → → ➔ [A]
            </p>
          </div>
        </div>
        <div
          className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[20px]"
          data-node-id="20:135"
          data-name="Frame"
        >
          <div
            className="relative flex shrink-0 items-center gap-[12px]"
            data-node-id="20:136"
            data-name="Frame"
          >
            <div
              className="relative h-[24px] w-[4px] shrink-0 bg-[#e1251b]"
              data-node-id="20:137"
              data-name="Rectangle"
            />
            <p className="relative shrink-0 text-[20px] font-bold text-white" data-node-id="20:138">
              80% 核心损耗
            </p>
          </div>
          <p
            className="relative w-full min-w-full shrink-0 text-[15px] leading-[1.6] font-normal text-[#a0a0a0]"
            data-node-id="20:139"
          >
            用户调研数据显示，在虚拟键盘操作中，80%
            的按键操作花费在光标移动定位字母上。传统QWERTY键盘在电视大屏上拉长了横向跨度，导致用户每输入一个字符都需要进行大量的遥控器微调。
          </p>
        </div>
      </div>
    </section>
  );
}

function CompetitiveResearch() {
  return (
    <section
      className="relative flex w-full shrink-0 flex-col items-start gap-16 bg-[#0d0d0d] px-6 py-20 sm:px-10 xl:min-h-[1400px] xl:gap-[120px] xl:px-20 xl:py-[160px]"
      data-node-id="20:141"
      id="competitive-research"
    >
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
        data-node-id="20:142"
        data-name="Frame"
      >
        <p className="relative shrink-0 text-[14px] font-bold text-[#e1251b]" data-node-id="20:143">
          COMPETITIVE RESEARCH
        </p>
        <h2
          className="relative w-full min-w-full shrink-0 text-4xl font-bold text-white xl:text-5xl"
          data-node-id="20:144"
        >
          竞品调研
        </h2>
        <p
          className="relative w-full min-w-full shrink-0 text-[18px] font-normal text-[#a0a0a0]"
          data-node-id="20:145"
        >
          主流电视厂商搜索输入方案对比
        </p>
        <div
          className="relative h-px w-full shrink-0 bg-[#262626] opacity-20"
          data-node-id="20:146"
          data-name="Divider"
        />
      </div>
      <div
        className="relative grid w-full shrink-0 grid-cols-1 items-start gap-[40px] xl:grid-cols-3"
        data-node-id="20:147"
        data-name="CompetitorsGrid"
      >
        <div
          className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[24px] rounded-[12px] border border-solid border-[#262626] bg-[#161616] p-[40px]"
          data-node-id="20:148"
          data-name="CompetitorColumn"
        >
          <p
            className="relative w-full min-w-full shrink-0 text-[24px] font-bold text-white"
            data-node-id="20:149"
          >
            小米电视
          </p>
          <div
            className="relative h-px w-full shrink-0 bg-[#262626] opacity-50"
            data-node-id="20:150"
            data-name="Divider"
          />
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="20:151"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 text-[12px] font-semibold text-[#e1251b] uppercase"
              data-node-id="20:152"
            >
              输入方案
            </p>
            <p
              className="relative w-full min-w-full shrink-0 text-[16px] leading-[1.5] font-normal text-[#a0a0a0]"
              data-node-id="20:153"
            >
              系统自带全键盘（QWERTY 布局）
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="20:154"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 text-[12px] font-semibold text-[#666] uppercase"
              data-node-id="20:155"
            >
              效率表现
            </p>
            <p
              className="relative w-full min-w-full shrink-0 text-[15px] leading-[1.5] font-normal text-[#a0a0a0]"
              data-node-id="20:156"
            >
              光标需要逐格在网格中上下左右移动，按键链路最长。无预测纠错时体验极差。
            </p>
          </div>
          <div
            className="relative h-[160px] w-full shrink-0 rounded-[8px]"
            data-node-id="25:2"
            data-name="Xiaomi TV Input Screenshot"
          >
            <img
              alt="小米电视 QWERTY 搜索键盘"
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
              src="/profile/assets/tv-input/xiaomi-tv-input-screenshot.png"
            />
          </div>
        </div>
        <div
          className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[24px] rounded-[12px] border border-solid border-[#262626] bg-[#161616] p-[40px]"
          data-node-id="20:157"
          data-name="CompetitorColumn"
        >
          <p
            className="relative w-full min-w-full shrink-0 text-[24px] font-bold text-white"
            data-node-id="20:158"
          >
            Apple TV
          </p>
          <div
            className="relative h-px w-full shrink-0 bg-[#262626] opacity-50"
            data-node-id="20:159"
            data-name="Divider"
          />
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="20:160"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 text-[12px] font-semibold text-[#e1251b] uppercase"
              data-node-id="20:161"
            >
              输入方案
            </p>
            <p
              className="relative w-full min-w-full shrink-0 text-[16px] leading-[1.5] font-normal text-[#a0a0a0]"
              data-node-id="20:162"
            >
              单行字母排列键盘 + Siri 语音辅助
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="20:163"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 text-[12px] font-semibold text-[#666] uppercase"
              data-node-id="20:164"
            >
              效率表现
            </p>
            <p
              className="relative w-full min-w-full shrink-0 text-[15px] leading-[1.5] font-normal text-[#a0a0a0]"
              data-node-id="20:165"
            >
              单行键盘缩短了垂直移动，通过语音在搜索场景下大幅辅助，但非英语场景下识别度受限。
            </p>
          </div>
          <div
            className="relative h-[160px] w-full shrink-0 rounded-[8px]"
            data-node-id="25:3"
            data-name="Apple TV Input Screenshot"
          >
            <img
              alt="Apple TV 单行字母搜索键盘"
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
              src="/profile/assets/tv-input/apple-tv-input-screenshot.png"
            />
          </div>
        </div>
        <div
          className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[24px] rounded-[12px] border border-solid border-[#e1251b] bg-[rgba(225,37,27,0.13)] p-[40px]"
          data-node-id="20:166"
          data-name="CompetitorColumn"
        >
          <p
            className="relative w-full min-w-full shrink-0 text-[24px] font-bold text-white"
            data-node-id="20:167"
          >
            三星电视
          </p>
          <div
            className="relative h-px w-full shrink-0 bg-[#262626] opacity-50"
            data-node-id="20:168"
            data-name="Divider"
          />
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="20:169"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 text-[12px] font-semibold text-[#e1251b] uppercase"
              data-node-id="20:170"
            >
              输入方案
            </p>
            <p
              className="relative w-full min-w-full shrink-0 text-[16px] leading-[1.5] font-normal text-[#a0a0a0]"
              data-node-id="20:171"
            >
              T9 九宫格自定义键盘
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px] font-semibold"
            data-node-id="20:172"
            data-name="Frame"
          >
            <p
              className="relative shrink-0 text-[12px] text-[#666] uppercase"
              data-node-id="20:173"
            >
              效率表现
            </p>
            <p
              className="relative w-full min-w-full shrink-0 text-[15px] leading-[1.5] text-white"
              data-node-id="20:174"
            >
              通过九宫格和高频联想，有效减少光标的物理移动距离。在大屏适配上具备明显优势。
            </p>
          </div>
          <div
            className="relative h-[160px] w-full shrink-0 rounded-[8px]"
            data-node-id="25:4"
            data-name="Samsung TV Input Screenshot"
          >
            <img
              alt="三星电视九宫格输入键盘"
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
              src="/profile/assets/tv-input/samsung-tv-input-screenshot.png"
            />
          </div>
        </div>
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-8 rounded-[16px] border-[1.5px] border-solid border-[#e1251b] bg-[#161616] p-6 sm:p-10 xl:p-14"
        data-node-id="20:175"
        data-name="InsightCallout"
      >
        <div
          className="relative flex shrink-0 items-center gap-[12px]"
          data-node-id="20:176"
          data-name="Frame"
        >
          <div
            className="relative size-[24px] shrink-0"
            data-node-id="20:187"
            data-name="lightbulb"
          >
            <img
              alt=""
              className="absolute inset-0 block max-w-none"
              src="/profile/assets/tv-input/lightbulb.svg"
            />
          </div>
          <p className="relative shrink-0 text-[22px] font-bold text-white" data-node-id="20:178">
            核心洞察结论
          </p>
        </div>
        <p
          className="relative w-full min-w-full shrink-0 text-[18px] leading-[1.7] font-normal text-white"
          data-node-id="20:179"
        >
          自定义键盘（如首字母分组、九宫格）的输入效率显著高于系统全键盘——目标资源定位的平均按键次数减少
          40%，耗时缩短 35%。
        </p>
      </div>
      <div
        className="flex w-full flex-col items-center gap-10 rounded-2xl border border-[#262626] bg-[#111] px-6 py-16 xl:px-16 xl:py-20"
        data-node-id="20:180"
        data-name="ConclusionSection"
      >
        <p
          className="relative shrink-0 text-center text-[14px] font-bold text-[#e1251b]"
          data-node-id="20:181"
        >
          OUR MISSION
        </p>
        <p
          className="relative w-full shrink-0 text-center text-2xl leading-[1.4] font-bold text-white xl:w-[1076px] xl:text-4xl"
          data-node-id="20:182"
        >
          我们的目标：在智能电视搜索影视资源这一具体场景下，进一步突破自定义键盘的效率上限，探索创新输入方案。
        </p>
        <div
          className="relative flex shrink-0 items-start pt-[16px]"
          data-node-id="20:183"
          data-name="Frame"
        >
          <Button
            asChild
            className="h-auto rounded-md bg-[#e1251b] px-6 py-3 text-[15px] text-white hover:bg-[#c92118] dark:bg-[#e1251b]"
          >
            <a href="#design-solution">探索下一阶段</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function DesignSolution() {
  return (
    <section
      className="relative flex w-full shrink-0 flex-col items-start gap-12 overflow-hidden bg-[#0d0d0d] px-6 py-20 sm:px-10 xl:min-h-[1600px] xl:gap-20 xl:px-20 xl:py-[120px]"
      data-node-id="20:196"
      id="design-solution"
    >
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
        data-node-id="20:197"
        data-name="SectionHeader"
      >
        <p className="relative shrink-0 text-[14px] font-bold text-[#e1251b]" data-node-id="20:198">
          DESIGN SOLUTION
        </p>
        <h2
          className="relative shrink-0 text-4xl font-bold text-white xl:text-5xl"
          data-node-id="20:199"
        >
          设计方案
        </h2>
        <p
          className="relative shrink-0 text-[18px] font-normal text-[#a0a0a0]"
          data-node-id="20:200"
        >
          五键输入法：精简到极致的软硬耦合体验
        </p>
        <div
          className="relative h-px w-full shrink-0 bg-[#262626] opacity-20"
          data-node-id="20:201"
          data-name="Divider"
        />
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-8 xl:flex-row xl:gap-16"
        data-node-id="20:202"
        data-name="Frame"
      >
        <p
          className="relative w-full shrink-0 text-[24px] leading-[1.6] font-light text-white xl:w-[480px]"
          data-node-id="20:203"
        >
          从 PC 键盘获得的启发：字母与按键一一对应，强确定性实现盲打。
        </p>
        <div
          className="relative flex min-w-0 flex-[1_0_0] flex-col items-start"
          data-node-id="20:204"
          data-name="Frame"
        >
          <p
            className="relative w-full shrink-0 text-[16px] leading-[1.8] font-normal text-[#a0a0a0]"
            data-node-id="20:205"
          >
            PC 键盘之所以高效，核心在于肌肉记忆。当键盘只有 5
            个物理方向键时，传统的虚拟指针挪动会造成大量“移动光标 +
            点击确认”的无效循环。我们的重塑痛点方案是：将“直接映射 + 无光标移动”模式带入大屏交互。
          </p>
        </div>
      </div>
      <div
        className="relative grid w-full shrink-0 grid-cols-1 items-start gap-8 md:grid-cols-2"
        data-node-id="20:206"
        data-name="Frame"
      >
        <div
          className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[16px] self-stretch rounded-[12px] border border-solid border-[#262626] bg-[#161616] p-5 sm:p-8"
          data-node-id="20:207"
          data-name="ConstraintCard"
        >
          <div
            className="relative flex shrink-0 items-center gap-[8px]"
            data-node-id="20:208"
            data-name="Frame"
          >
            <div
              className="relative size-[20px] shrink-0"
              data-node-id="20:415"
              data-name="eye-closed"
            >
              <img
                alt=""
                className="absolute inset-0 block max-w-none"
                src="/profile/assets/tv-input/eye-closed.svg"
              />
            </div>
            <p className="relative shrink-0 text-[20px] font-bold text-white" data-node-id="20:210">
              双向视线制约
            </p>
          </div>
          <p
            className="relative w-full min-w-full shrink-0 text-[14px] leading-[1.6] font-normal text-[#a0a0a0]"
            data-node-id="20:211"
          >
            遥控器在手，屏幕在远。极力避免用户频繁看手、看屏幕的割裂，必须实现极致盲打编码。
          </p>
        </div>
        <div
          className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#262626] bg-[#161616] p-5 sm:p-8"
          data-node-id="20:212"
          data-name="ConstraintCard"
        >
          <div
            className="relative flex shrink-0 items-center gap-[8px]"
            data-node-id="20:213"
            data-name="Frame"
          >
            <div className="relative size-[20px] shrink-0" data-node-id="20:412" data-name="cpu">
              <img
                alt=""
                className="absolute inset-0 block max-w-none"
                src="/profile/assets/tv-input/cpu.svg"
              />
            </div>
            <p className="relative shrink-0 text-[20px] font-bold text-white" data-node-id="20:215">
              物理按键限制
            </p>
          </div>
          <p
            className="relative w-full min-w-full shrink-0 text-[14px] leading-[1.6] font-normal text-[#a0a0a0]"
            data-node-id="20:216"
          >
            大屏遥控器的物理极限极度简朴：仅保留
            上（↑）、下（↓）、左（←）、右（→）与确定（OK）五大核心功能。
          </p>
        </div>
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[40px] rounded-[16px] border border-solid border-[#262626] bg-[#161616] p-5 sm:p-8 xl:p-12"
        data-node-id="20:217"
        data-name="FiveKeyDiagram"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[12px]"
          data-node-id="20:218"
          data-name="Frame"
        >
          <p className="relative shrink-0 text-[24px] font-bold text-white" data-node-id="20:219">
            五键编码逻辑 (5 × 5 = 25 空间定位)
          </p>
          <p
            className="relative w-full min-w-full shrink-0 text-[15px] font-normal text-[#a0a0a0]"
            data-node-id="20:220"
          >
            利用两次方向键组合即可完美映射 25 个常用字母（仅 Y、Z
            需第三次辅助定位），全键盘光标彻底消失。
          </p>
        </div>
        <div
          className="relative grid w-full shrink-0 grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 xl:grid-cols-5"
          data-node-id="20:221"
          data-name="Frame"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#0d0d0d] p-[20px]"
            data-node-id="20:222"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 items-center gap-[8px]"
              data-node-id="20:223"
              data-name="Frame"
            >
              <div
                className="relative flex size-[28px] shrink-0 items-center justify-center rounded-[4px] bg-[#e1251b]"
                data-node-id="20:224"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[16px] font-bold text-white"
                  data-node-id="20:225"
                >
                  ←
                </p>
              </div>
              <p
                className="relative shrink-0 text-[15px] font-bold text-white"
                data-node-id="20:226"
              >
                左方向键
              </p>
            </div>
            <p
              className="relative shrink-0 text-[24px] font-bold text-[#e1251b]"
              data-node-id="20:227"
            >
              A B C D E
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#0d0d0d] p-[20px]"
            data-node-id="20:228"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 items-center gap-[8px]"
              data-node-id="20:229"
              data-name="Frame"
            >
              <div
                className="relative flex size-[28px] shrink-0 items-center justify-center rounded-[4px] bg-[#e1251b]"
                data-node-id="20:230"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[16px] font-bold text-white"
                  data-node-id="20:231"
                >
                  ↑
                </p>
              </div>
              <p
                className="relative shrink-0 text-[15px] font-bold text-white"
                data-node-id="20:232"
              >
                上方向键
              </p>
            </div>
            <p className="relative shrink-0 text-[24px] font-bold text-white" data-node-id="20:233">
              F G H I J
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#0d0d0d] p-[20px]"
            data-node-id="20:234"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 items-center gap-[8px]"
              data-node-id="20:235"
              data-name="Frame"
            >
              <div
                className="relative flex size-[28px] shrink-0 items-center justify-center rounded-[4px] bg-[#e1251b]"
                data-node-id="20:236"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[16px] font-bold text-white"
                  data-node-id="20:237"
                >
                  →
                </p>
              </div>
              <p
                className="relative shrink-0 text-[15px] font-bold text-white"
                data-node-id="20:238"
              >
                右方向键
              </p>
            </div>
            <p
              className="relative shrink-0 text-[24px] font-bold text-[#e1251b]"
              data-node-id="20:239"
            >
              K L M N O
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#0d0d0d] p-[20px]"
            data-node-id="20:240"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 items-center gap-[8px]"
              data-node-id="20:241"
              data-name="Frame"
            >
              <div
                className="relative flex size-[28px] shrink-0 items-center justify-center rounded-[4px] bg-[#e1251b]"
                data-node-id="20:242"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[16px] font-bold text-white"
                  data-node-id="20:243"
                >
                  ↓
                </p>
              </div>
              <p
                className="relative shrink-0 text-[15px] font-bold text-white"
                data-node-id="20:244"
              >
                下方向键
              </p>
            </div>
            <p className="relative shrink-0 text-[24px] font-bold text-white" data-node-id="20:245">
              P Q R S T
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#e1251b] bg-[#0d0d0d] p-[20px]"
            data-node-id="20:246"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 items-center gap-[8px]"
              data-node-id="20:247"
              data-name="Frame"
            >
              <div
                className="relative flex size-[28px] shrink-0 items-center justify-center rounded-[4px] bg-[#e1251b]"
                data-node-id="20:248"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[16px] font-bold text-white"
                  data-node-id="20:249"
                >
                  ●
                </p>
              </div>
              <p
                className="relative shrink-0 text-[15px] font-bold text-white"
                data-node-id="20:250"
              >
                OK 确认键
              </p>
            </div>
            <p className="relative shrink-0 text-[24px] font-bold text-white" data-node-id="20:251">
              U V W X Y Z
            </p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none relative -mx-6 -mb-20 h-[420px] w-[calc(100%+3rem)] overflow-hidden sm:-mx-10 sm:w-[calc(100%+5rem)] xl:absolute xl:top-[654px] xl:left-[-408px] xl:z-10 xl:m-0 xl:flex xl:h-[1285.636px] xl:w-[1431.507px] xl:items-center xl:justify-center xl:overflow-visible"
        data-node-id="86:339"
      >
        <div className="absolute top-1/2 left-1/2 flex h-[500px] w-[360px] -translate-x-1/2 -translate-y-1/2 rotate-[63.53deg] xl:static xl:h-auto xl:w-auto xl:translate-x-0 xl:translate-y-0">
          <div
            className="relative h-[500px] w-[360px] xl:h-[940.378px] xl:w-[680.68px]"
            data-name="TV Remote Reference"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                alt=""
                className="absolute top-[-16.28%] left-[-31.12%] h-[116.28%] w-[160.64%] max-w-none"
                src="/profile/assets/tv-input/hand-remote.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractionFlow() {
  return (
    <section
      className="relative flex w-full shrink-0 flex-col items-start gap-12 bg-[#0d0d0d] px-6 py-20 sm:px-10 xl:min-h-[1800px] xl:gap-20 xl:px-20 xl:py-[120px]"
      data-node-id="20:253"
      id="interaction-flow"
    >
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
        data-node-id="20:254"
        data-name="SectionHeader"
      >
        <p className="relative shrink-0 text-[14px] font-bold text-[#e1251b]" data-node-id="20:255">
          INTERACTION FLOW
        </p>
        <h2
          className="relative shrink-0 text-4xl font-bold text-white xl:text-5xl"
          data-node-id="20:256"
        >
          交互流程
        </h2>
        <p
          className="relative shrink-0 text-[18px] font-normal text-[#a0a0a0]"
          data-node-id="20:257"
        >
          两次按键完成任意常规字母的输入路径
        </p>
        <div
          className="relative h-px w-full shrink-0 bg-[#262626] opacity-20"
          data-node-id="20:258"
          data-name="Divider"
        />
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-center gap-12 xl:gap-20"
        data-node-id="20:259"
        data-name="Frame"
      >
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[40px]"
          data-node-id="24:4"
          data-name="Frame"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
            data-node-id="24:5"
            data-name="section-01"
          >
            <div
              className="relative flex w-full shrink-0 items-center gap-[12px]"
              data-node-id="41:4"
              data-name="title-row"
            >
              <div
                className="relative flex shrink-0 items-center justify-center rounded-[999px] bg-[#e1251b] px-[12px] py-[6px]"
                data-node-id="41:5"
                data-name="number-tag"
              >
                <p
                  className="relative shrink-0 text-[14px] font-bold text-white"
                  data-node-id="24:6"
                >
                  01
                </p>
              </div>
              <h3
                className="relative min-w-0 flex-[1_0_0] text-left text-2xl leading-[1.2] font-bold text-white sm:text-[32px]"
                data-node-id="24:7"
              >
                初始映射
              </h3>
            </div>
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] leading-[1.5] font-normal text-[#666]"
              data-node-id="24:8"
            >
              按左/上/右/下/中顺序分布 26 个字母
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-wrap items-center gap-8 gap-y-10 xl:gap-16"
            data-node-id="24:9"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 flex-col items-center gap-[16px]"
              data-node-id="24:10"
              data-name="Frame"
            >
              <div
                className="relative flex size-[200px] shrink-0 flex-col items-center justify-center"
                data-node-id="24:11"
                data-name="Frame"
              >
                <div
                  className="absolute top-0 left-0 size-[200px]"
                  data-node-id="24:12"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse.svg"
                  />
                </div>
                <div
                  className="absolute top-[70px] left-[70px] size-[60px]"
                  data-node-id="24:17"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse1.svg"
                  />
                </div>
                <div
                  className="absolute top-[14px] left-[94px] flex flex-col items-center"
                  data-node-id="24:18"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[11px] font-normal text-[#555]"
                    data-node-id="24:19"
                  >
                    ↑
                  </p>
                </div>
                <div
                  className="absolute top-[168px] left-[94px] flex flex-col items-center"
                  data-node-id="24:20"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[11px] font-normal text-[#555]"
                    data-node-id="24:21"
                  >
                    ↓
                  </p>
                </div>
                <div
                  className="absolute top-[92px] left-[14px] flex flex-col items-center"
                  data-node-id="24:22"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[11px] font-normal text-[#555]"
                    data-node-id="24:23"
                  >
                    ←
                  </p>
                </div>
                <div
                  className="absolute top-[92px] left-[170px] flex flex-col items-center"
                  data-node-id="24:24"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[11px] font-normal text-[#555]"
                    data-node-id="24:25"
                  >
                    →
                  </p>
                </div>
              </div>
              <p
                className="relative shrink-0 text-[12px] font-normal text-[#555]"
                data-node-id="24:26"
              >
                初始状态
              </p>
            </div>
            <div
              className="relative flex shrink-0 flex-col items-center gap-[6px]"
              data-node-id="24:27"
              data-name="Frame"
            >
              <img src="/profile/assets/tv-input/line3.svg" alt="" />
              <p
                className="relative shrink-0 text-[10px] font-normal text-[#666]"
                data-node-id="24:31"
              >
                映射分配
              </p>
            </div>
            <div
              className="relative flex shrink-0 flex-col items-center gap-[16px]"
              data-node-id="24:32"
              data-name="Frame"
            >
              <div
                className="relative flex size-[220px] shrink-0 flex-col items-center justify-center"
                data-node-id="24:33"
                data-name="Frame"
              >
                <div
                  className="absolute top-0 left-0 size-[220px]"
                  data-node-id="24:34"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse2.svg"
                  />
                </div>
                <div
                  className="absolute top-[75px] left-[75px] size-[70px]"
                  data-node-id="24:39"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse3.svg"
                  />
                </div>
                <div
                  className="absolute top-[22px] left-[87px] flex flex-col items-center p-[4px]"
                  data-node-id="24:40"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[10px] font-bold text-[#a0a0a0]"
                    data-node-id="24:41"
                  >
                    FGHIJ
                  </p>
                  <p
                    className="relative shrink-0 text-[9px] font-normal text-[#555]"
                    data-node-id="24:42"
                  >
                    上
                  </p>
                </div>
                <div
                  className="absolute top-[168px] left-[87px] flex flex-col items-center p-[4px]"
                  data-node-id="24:43"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[10px] font-bold text-[#a0a0a0]"
                    data-node-id="24:44"
                  >
                    PQRST
                  </p>
                  <p
                    className="relative shrink-0 text-[9px] font-normal text-[#555]"
                    data-node-id="24:45"
                  >
                    下
                  </p>
                </div>
                <div
                  className="absolute top-[98px] left-[8px] flex flex-col items-center p-[4px]"
                  data-node-id="24:46"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[10px] font-bold text-[#a0a0a0]"
                    data-node-id="24:47"
                  >
                    ABCDE
                  </p>
                  <p
                    className="relative shrink-0 text-[9px] font-normal text-[#555]"
                    data-node-id="24:48"
                  >
                    左
                  </p>
                </div>
                <div
                  className="absolute top-[98px] left-[158px] flex flex-col items-center p-[4px]"
                  data-node-id="24:49"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[10px] font-bold text-[#a0a0a0]"
                    data-node-id="24:50"
                  >
                    KLMNO
                  </p>
                  <p
                    className="relative shrink-0 text-[9px] font-normal text-[#555]"
                    data-node-id="24:51"
                  >
                    右
                  </p>
                </div>
                <div
                  className="absolute top-[99px] left-[88px] flex flex-col items-center px-[4px] py-[2px] text-[#e1251b]"
                  data-node-id="24:52"
                  data-name="Frame"
                >
                  <p className="relative shrink-0 text-[9px] font-bold" data-node-id="24:53">
                    UVWXYZ
                  </p>
                  <p className="relative shrink-0 text-[8px] font-normal" data-node-id="24:54">
                    中
                  </p>
                </div>
              </div>
              <p
                className="relative shrink-0 text-[12px] font-normal text-[#555]"
                data-node-id="24:55"
              >
                5 方向分组
              </p>
            </div>
            <div
              className="relative flex w-full max-w-[300px] shrink-0 flex-col items-start gap-[16px]"
              data-node-id="24:56"
              data-name="Frame"
            >
              <div
                className="relative h-[2px] w-[32px] shrink-0 bg-[#e1251b]"
                data-node-id="24:57"
                data-name="Rectangle"
              />
              <p
                className="relative w-full min-w-full shrink-0 text-[14px] leading-[1.8] font-normal text-[#666]"
                data-node-id="24:58"
              >
                26个字母按使用频率分为5组，映射至遥控器十字键的上下左右与中心确认键，形成空间直觉记忆。
              </p>
              <div
                className="relative flex shrink-0 flex-col items-start gap-[8px]"
                data-node-id="24:59"
                data-name="Frame"
              >
                <div
                  className="relative flex shrink-0 items-center gap-[12px]"
                  data-node-id="24:60"
                  data-name="Frame"
                >
                  <div
                    className="relative size-[8px] shrink-0 rounded-[4px] bg-[#e1251b]"
                    data-node-id="24:61"
                    data-name="Rectangle"
                  />
                  <p
                    className="relative shrink-0 text-[12px] font-normal text-[#a0a0a0]"
                    data-node-id="24:62"
                  >
                    中心 OK键 → UVWXYZ（高频）
                  </p>
                </div>
                <div
                  className="relative flex shrink-0 items-center gap-[12px]"
                  data-node-id="24:63"
                  data-name="Frame"
                >
                  <div
                    className="relative size-[8px] shrink-0 rounded-[4px] bg-[#444]"
                    data-node-id="24:64"
                    data-name="Rectangle"
                  />
                  <p
                    className="relative shrink-0 text-[12px] font-normal text-[#a0a0a0]"
                    data-node-id="24:65"
                  >
                    四方向键 → 各5字母组
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative h-px w-full shrink-0 bg-[#1e1e1e]"
          data-node-id="24:66"
          data-name="Rectangle"
        />
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[40px]"
          data-node-id="24:67"
          data-name="Frame"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start justify-center gap-[16px]"
            data-node-id="24:68"
            data-name="section-02"
          >
            <div
              className="relative flex w-full shrink-0 items-center gap-[12px]"
              data-node-id="41:6"
              data-name="title-row"
            >
              <div
                className="relative flex shrink-0 items-center justify-center rounded-[999px] bg-[#e1251b] px-[12px] py-[6px]"
                data-node-id="41:7"
                data-name="number-tag"
              >
                <p
                  className="relative shrink-0 text-[14px] font-bold text-white"
                  data-node-id="24:69"
                >
                  02
                </p>
              </div>
              <h3
                className="relative min-w-0 flex-[1_0_0] text-left text-2xl leading-[1.2] font-bold text-white sm:text-[32px]"
                data-node-id="24:70"
              >
                两次编码：选择字母 B → 左 » 上
              </h3>
            </div>
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] leading-[1.5] font-normal text-[#666]"
              data-node-id="24:71"
            >
              第一次按键选择字母组，第二次按键选择目标字母
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-wrap items-center gap-[40px] gap-y-10"
            data-node-id="24:72"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 flex-col items-center gap-[12px]"
              data-node-id="24:73"
              data-name="Frame"
            >
              <div
                className="relative flex size-[200px] shrink-0 flex-col items-center justify-center"
                data-node-id="24:74"
                data-name="Frame"
              >
                <div
                  className="absolute top-0 left-0 size-[200px]"
                  data-node-id="24:75"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse.svg"
                  />
                </div>
                <div
                  className="absolute top-0 left-0 size-[200px]"
                  data-node-id="24:80"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse4.svg"
                  />
                </div>
                <div
                  className="absolute top-[72px] left-[72px] size-[56px]"
                  data-node-id="24:81"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse5.svg"
                  />
                </div>
                <div
                  className="absolute top-[20px] left-[86px] flex flex-col items-center"
                  data-node-id="24:82"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-bold text-[#555]"
                    data-node-id="24:83"
                  >
                    FGHIJ
                  </p>
                </div>
                <div
                  className="absolute top-[164px] left-[82px] flex flex-col items-center"
                  data-node-id="24:84"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-bold text-[#555]"
                    data-node-id="24:85"
                  >
                    PQRST
                  </p>
                </div>
                <div
                  className="absolute top-[92px] left-[10px] flex flex-col items-center"
                  data-node-id="24:86"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-bold text-[#e1251b]"
                    data-node-id="24:87"
                  >
                    ABCDE
                  </p>
                </div>
                <div
                  className="absolute top-[92px] left-[156px] flex flex-col items-center"
                  data-node-id="24:88"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-bold text-[#555]"
                    data-node-id="24:89"
                  >
                    KLMNO
                  </p>
                </div>
                <div
                  className="absolute top-[89px] left-[95px] flex flex-col items-center"
                  data-node-id="24:90"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[8px] font-normal text-[#666]"
                    data-node-id="24:91"
                  >
                    UVW
                  </p>
                </div>
              </div>
              <div
                className="relative flex shrink-0 flex-col items-center gap-[4px]"
                data-node-id="24:92"
                data-name="Frame"
              >
                <div
                  className="relative flex shrink-0 items-start rounded-[4px] bg-[#e1251b] px-[12px] py-[4px]"
                  data-node-id="24:93"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[11px] font-bold text-white"
                    data-node-id="24:94"
                  >
                    ← 左
                  </p>
                </div>
                <p
                  className="relative shrink-0 text-[11px] font-normal text-[#666]"
                  data-node-id="24:95"
                >
                  第一次按键
                </p>
              </div>
            </div>
            <div className="relative h-0 w-[59px] shrink-0" data-node-id="24:96" data-name="Frame">
              <div className="absolute inset-[-3.68px_-0.85%_-3.68px_0]">
                <img alt="" className="block max-w-none" src="/profile/assets/tv-input/frame.svg" />
              </div>
            </div>
            <div
              className="relative flex shrink-0 flex-col items-center gap-[12px]"
              data-node-id="24:99"
              data-name="Frame"
            >
              <div
                className="relative flex size-[200px] shrink-0 flex-col items-center justify-center"
                data-node-id="24:100"
                data-name="Frame"
              >
                <div
                  className="absolute top-0 left-0 size-[200px]"
                  data-node-id="24:101"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse6.svg"
                  />
                </div>
                <div
                  className="absolute top-0 left-0 size-[200px]"
                  data-node-id="24:106"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse7.svg"
                  />
                </div>
                <div
                  className="absolute top-[72px] left-[72px] size-[56px]"
                  data-node-id="24:107"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse8.svg"
                  />
                </div>
                <div
                  className="absolute top-[16px] left-[93px] flex flex-col items-center"
                  data-node-id="24:108"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[10px] font-bold text-[#e1251b]"
                    data-node-id="24:109"
                  >
                    B
                  </p>
                </div>
                <div
                  className="absolute top-[164px] left-[91px] flex flex-col items-center"
                  data-node-id="24:110"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-bold text-[#555]"
                    data-node-id="24:111"
                  >
                    D
                  </p>
                </div>
                <div
                  className="absolute top-[92px] left-[14px] flex flex-col items-center"
                  data-node-id="24:112"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-bold text-[#555]"
                    data-node-id="24:113"
                  >
                    A
                  </p>
                </div>
                <div
                  className="absolute top-[92px] left-[168px] flex flex-col items-center"
                  data-node-id="24:114"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-bold text-[#555]"
                    data-node-id="24:115"
                  >
                    C
                  </p>
                </div>
                <div
                  className="absolute top-[93px] left-[97px] flex flex-col items-center"
                  data-node-id="24:116"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-bold text-[#e1251b]"
                    data-node-id="24:117"
                  >
                    E
                  </p>
                </div>
              </div>
              <div
                className="relative flex shrink-0 flex-col items-center gap-[4px]"
                data-node-id="24:118"
                data-name="Frame"
              >
                <div
                  className="relative flex shrink-0 items-start rounded-[4px] bg-[#e1251b] px-[12px] py-[4px]"
                  data-node-id="24:119"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[11px] font-bold text-white"
                    data-node-id="24:120"
                  >
                    ↑ 上 → B
                  </p>
                </div>
                <p
                  className="relative shrink-0 text-[11px] font-normal text-[#666]"
                  data-node-id="24:121"
                >
                  第二次按键 → 输出
                </p>
              </div>
            </div>
            <div
              className="relative flex w-full max-w-[300px] shrink-0 flex-col items-start gap-[16px]"
              data-node-id="24:122"
              data-name="Frame"
            >
              <div
                className="relative h-[2px] w-[32px] shrink-0 bg-[#e1251b]"
                data-node-id="24:123"
                data-name="Rectangle"
              />
              <p
                className="relative w-full min-w-full shrink-0 text-[14px] leading-[1.8] font-normal text-[#666]"
                data-node-id="24:124"
              >
                仅需两次按键完成输入。第一次选字母组，第二次从5个候选中精确锁定目标字母。
              </p>
              <div
                className="relative flex w-full shrink-0 flex-col items-start gap-[8px] rounded-[8px] border border-solid border-[#262626] bg-[#161616] px-[16px] py-[12px] text-[12px]"
                data-node-id="24:125"
                data-name="Frame"
              >
                <p className="relative shrink-0 font-bold text-[#e1251b]" data-node-id="24:126">
                  B 的路径
                </p>
                <p className="relative shrink-0 font-normal text-[#a0a0a0]" data-node-id="24:127">
                  ← 左（选ABCDE）
                </p>
                <p className="relative shrink-0 font-normal text-[#a0a0a0]" data-node-id="24:128">
                  ↑ 上（选B）= 2击
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative h-px w-full shrink-0 bg-[#1e1e1e]"
          data-node-id="24:129"
          data-name="Rectangle"
        />
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[40px]"
          data-node-id="24:130"
          data-name="Frame"
        >
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
            data-node-id="24:131"
            data-name="section-03"
          >
            <div
              className="relative flex w-full shrink-0 items-center gap-[12px]"
              data-node-id="41:8"
              data-name="title-row"
            >
              <div
                className="relative flex shrink-0 items-center justify-center rounded-[999px] bg-[#e1251b] px-[12px] py-[6px]"
                data-node-id="41:9"
                data-name="number-tag"
              >
                <p
                  className="relative shrink-0 text-[14px] font-bold text-white"
                  data-node-id="24:132"
                >
                  03
                </p>
              </div>
              <h3
                className="relative min-w-0 flex-[1_0_0] text-left text-2xl leading-[1.2] font-bold text-white sm:text-[32px]"
                data-node-id="24:133"
              >
                三次编码：选择字母 Y → 中 » 中 » 左
              </h3>
            </div>
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] leading-[1.5] font-normal text-[#666]"
              data-node-id="24:134"
            >
              UVWXYZ 含6字母需三级展开，Y / Z 为末端字符
            </p>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-wrap items-center gap-8 gap-y-10"
            data-node-id="24:135"
            data-name="Frame"
          >
            <div
              className="relative flex shrink-0 flex-col items-center gap-[12px]"
              data-node-id="24:136"
              data-name="Frame"
            >
              <div
                className="relative flex size-[180px] shrink-0 flex-col items-center justify-center"
                data-node-id="24:137"
                data-name="Frame"
              >
                <div
                  className="absolute top-0 left-0 size-[180px]"
                  data-node-id="24:138"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse9.svg"
                  />
                </div>
                <div
                  className="absolute top-[58px] left-[58px] size-[64px]"
                  data-node-id="24:143"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse10.svg"
                  />
                </div>
                <div
                  className="absolute top-[16.5px] left-[75px] flex flex-col items-center"
                  data-node-id="24:144"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-normal text-[#444]"
                    data-node-id="24:145"
                  >
                    FGHIJ
                  </p>
                </div>
                <div
                  className="absolute top-[148.5px] left-[75px] flex flex-col items-center"
                  data-node-id="24:146"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-normal text-[#444]"
                    data-node-id="24:147"
                  >
                    PQRST
                  </p>
                </div>
                <div
                  className="absolute top-[82px] left-[8px] flex flex-col items-center"
                  data-node-id="24:148"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-normal text-[#444]"
                    data-node-id="24:149"
                  >
                    ABCDE
                  </p>
                </div>
                <div
                  className="absolute top-[82px] left-[140px] flex flex-col items-center"
                  data-node-id="24:150"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[9px] font-normal text-[#444]"
                    data-node-id="24:151"
                  >
                    KLMNO
                  </p>
                </div>
                <div
                  className="absolute top-[79.5px] left-[76px] flex flex-col items-center text-[9px] font-bold text-[#e1251b]"
                  data-node-id="24:152"
                  data-name="Frame"
                >
                  <p className="relative shrink-0" data-node-id="24:153">
                    UVW
                  </p>
                  <p className="relative shrink-0" data-node-id="24:154">
                    XYZ
                  </p>
                </div>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] bg-[#e1251b] px-[10px] py-[4px]"
                data-node-id="24:155"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[10px] font-bold text-white"
                  data-node-id="24:156"
                >
                  OK 中
                </p>
              </div>
            </div>
            <div className="relative h-0 w-[59px] shrink-0" data-node-id="24:157" data-name="Frame">
              <div className="absolute inset-[-3.68px_-0.85%_-3.68px_0]">
                <img
                  alt=""
                  className="block max-w-none"
                  src="/profile/assets/tv-input/frame1.svg"
                />
              </div>
            </div>
            <div
              className="relative flex shrink-0 flex-col items-center gap-[12px]"
              data-node-id="24:160"
              data-name="Frame"
            >
              <div
                className="relative flex size-[180px] shrink-0 flex-col items-center justify-center"
                data-node-id="24:161"
                data-name="Frame"
              >
                <div
                  className="absolute top-0 left-0 size-[180px]"
                  data-node-id="24:162"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse11.svg"
                  />
                </div>
                <div
                  className="absolute top-[58px] left-[58px] size-[64px]"
                  data-node-id="24:167"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse10.svg"
                  />
                </div>
                <div
                  className="absolute top-[16.5px] left-[83px] flex flex-col items-center"
                  data-node-id="24:168"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[10px] font-bold text-[#a0a0a0]"
                    data-node-id="24:169"
                  >
                    V
                  </p>
                </div>
                <div
                  className="absolute top-[148.5px] left-[83px] flex flex-col items-center"
                  data-node-id="24:170"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[10px] font-bold text-[#a0a0a0]"
                    data-node-id="24:171"
                  >
                    X
                  </p>
                </div>
                <div
                  className="absolute top-[82px] left-[14px] flex flex-col items-center"
                  data-node-id="24:172"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[10px] font-bold text-[#a0a0a0]"
                    data-node-id="24:173"
                  >
                    U
                  </p>
                </div>
                <div
                  className="absolute top-[82px] left-[150px] flex flex-col items-center"
                  data-node-id="24:174"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[10px] font-bold text-[#a0a0a0]"
                    data-node-id="24:175"
                  >
                    W
                  </p>
                </div>
                <div
                  className="absolute top-[78.5px] left-1/2 flex -translate-x-1/2 flex-col items-center text-[#e1251b]"
                  data-node-id="24:176"
                  data-name="Frame"
                >
                  <p className="relative shrink-0 text-[9px] font-bold" data-node-id="24:177">
                    Y·Z
                  </p>
                  <p className="relative shrink-0 text-[8px] font-normal" data-node-id="24:178">
                    中
                  </p>
                </div>
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] bg-[#e1251b] px-[10px] py-[4px]"
                data-node-id="24:179"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[10px] font-bold text-white"
                  data-node-id="24:180"
                >
                  OK 中
                </p>
              </div>
            </div>
            <div className="relative h-0 w-[59px] shrink-0" data-node-id="24:181" data-name="Frame">
              <div className="absolute inset-[-3.68px_-0.85%_-3.68px_0]">
                <img
                  alt=""
                  className="block max-w-none"
                  src="/profile/assets/tv-input/frame1.svg"
                />
              </div>
            </div>
            <div
              className="relative flex shrink-0 flex-col items-center gap-[12px]"
              data-node-id="24:184"
              data-name="Frame"
            >
              <div
                className="relative flex size-[180px] shrink-0 flex-col items-center justify-center"
                data-node-id="24:185"
                data-name="Frame"
              >
                <div
                  className="absolute top-0 left-0 size-[180px]"
                  data-node-id="24:186"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse11.svg"
                  />
                </div>
                <div
                  className="absolute top-0 left-0 size-[180px]"
                  data-node-id="24:191"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse12.svg"
                  />
                </div>
                <div
                  className="absolute top-[62px] left-[62px] size-[56px]"
                  data-node-id="24:192"
                  data-name="Ellipse"
                >
                  <img
                    alt=""
                    className="absolute inset-0 block max-w-none"
                    src="/profile/assets/tv-input/ellipse5.svg"
                  />
                </div>
                <div
                  className="absolute top-[82px] left-[10px] flex flex-col items-center"
                  data-node-id="24:193"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[16px] font-bold text-[#e1251b]"
                    data-node-id="24:194"
                  >
                    Y
                  </p>
                </div>
                <div
                  className="absolute top-[82px] left-[148px] flex flex-col items-center"
                  data-node-id="24:195"
                  data-name="Frame"
                >
                  <p
                    className="relative shrink-0 text-[16px] font-bold text-[#555]"
                    data-node-id="24:196"
                  >
                    Z
                  </p>
                </div>
                <div
                  className="absolute top-[79px] left-[72px] h-[11px] w-[27px]"
                  data-node-id="24:197"
                  data-name="Frame"
                />
              </div>
              <div
                className="relative flex shrink-0 items-start rounded-[4px] bg-[#e1251b] px-[10px] py-[4px]"
                data-node-id="24:199"
                data-name="Frame"
              >
                <p
                  className="relative shrink-0 text-[10px] font-bold text-white"
                  data-node-id="24:200"
                >
                  ← 左 → Y
                </p>
              </div>
            </div>
            <div
              className="relative flex w-full max-w-[300px] shrink-0 flex-col items-start gap-[16px]"
              data-node-id="24:201"
              data-name="Frame"
            >
              <div
                className="relative h-[2px] w-[32px] shrink-0 bg-[#e1251b]"
                data-node-id="24:202"
                data-name="Rectangle"
              />
              <p
                className="relative w-full min-w-full shrink-0 text-[13px] leading-[1.8] font-normal text-[#666]"
                data-node-id="24:203"
              >
                Y、Z 作为末端低频字符，需三次按键完成输入，是整套系统中最长的输入路径。
              </p>
              <div
                className="relative flex w-full shrink-0 flex-col items-start gap-[8px] rounded-[8px] border border-solid border-[#262626] bg-[#161616] px-[16px] py-[12px] text-[12px]"
                data-node-id="24:204"
                data-name="Frame"
              >
                <p className="relative shrink-0 font-bold text-[#e1251b]" data-node-id="24:205">
                  Y 的路径
                </p>
                <p className="relative shrink-0 font-normal text-[#a0a0a0]" data-node-id="24:206">
                  OK 中（选UVWXYZ）
                </p>
                <p className="relative shrink-0 font-normal text-[#a0a0a0]" data-node-id="24:207">
                  OK 中（选Y·Z组）
                </p>
                <p className="relative shrink-0 font-normal text-[#a0a0a0]" data-node-id="24:208">
                  ← 左（选Y）= 3击
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TvMockupShowcase() {
  return (
    <section
      className="flex w-full flex-col items-center gap-14 overflow-hidden bg-[#0d0d0d] px-6 py-20 sm:px-10 xl:min-h-[1200px] xl:p-20"
      data-node-id="39:4"
      id="tv-mockup-showcase"
    >
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
        data-node-id="39:5"
        data-name="section-header"
      >
        <div
          className="relative flex shrink-0 items-center gap-[8px]"
          data-node-id="39:6"
          data-name="eyebrow"
        >
          <div
            className="relative size-[12px] shrink-0 rounded-[2px] bg-[#e1251b]"
            data-node-id="39:7"
            data-name="Rectangle"
          />
          <p className="relative shrink-0 text-[14px] font-bold text-white" data-node-id="39:8">
            INTERFACE SHOWCASE
          </p>
        </div>
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
          data-node-id="39:9"
          data-name="titles"
        >
          <h2
            className="relative w-full shrink-0 text-[40px] font-bold text-white"
            data-node-id="39:10"
          >
            产品界面
          </h2>
          <p
            className="relative w-full shrink-0 text-[18px] font-normal text-[#a0a0a0]"
            data-node-id="39:11"
          >
            Rakuten × TCL 智能盒子搜索界面
          </p>
        </div>
        <div
          className="relative h-px w-full shrink-0 bg-[#262626] opacity-30"
          data-node-id="39:12"
          data-name="divider"
        />
      </div>
      <div
        className="flex w-full flex-1 flex-col items-center justify-center py-8"
        data-node-id="39:13"
        data-name="tv-mockup-container"
      >
        <div
          className="flex w-full max-w-[1060px] flex-col items-center justify-center overflow-hidden rounded-[20px] border-2 border-[#333] bg-[#1f1f1f] p-2 shadow-[0px_32px_64px_0px_rgba(0,0,0,0.7)] sm:p-3"
          data-node-id="39:14"
          data-name="tv-bezel"
        >
          <div
            className="relative aspect-[1036/602] w-full overflow-hidden rounded-xl"
            data-node-id="45:258"
            data-name="image 2"
          >
            <img
              alt="Rakuten × TCL 智能盒子五键搜索界面"
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[17px] object-cover"
              src="/profile/assets/tv-input/image2.png"
            />
          </div>
        </div>
        <div
          className="relative flex w-full shrink-0 flex-col items-center"
          data-node-id="39:107"
          data-name="tv-stand"
        >
          <div
            className="h-8 w-1/6 border border-[#222] bg-[#111]"
            data-node-id="39:108"
            data-name="Rectangle"
          />
          <div
            className="h-2 w-1/3 max-w-80 rounded-t border border-[#333] bg-[#1e1e1e]"
            data-node-id="39:109"
            data-name="Rectangle"
          />
        </div>
      </div>
    </section>
  );
}

function TestingResults() {
  return (
    <section
      className="relative flex w-full shrink-0 flex-col items-start gap-12 bg-[#0d0d0d] px-6 py-20 sm:px-10 xl:min-h-[1400px] xl:gap-20 xl:px-20 xl:py-[120px]"
      data-node-id="20:348"
      id="testing-results"
    >
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[16px]"
        data-node-id="20:349"
        data-name="SectionHeader"
      >
        <p
          className="relative shrink-0 text-[14px] font-bold text-[#e1251b]"
          data-node-id="20:350"
        >{`TESTING & RESULTS`}</p>
        <h2
          className="relative shrink-0 text-4xl font-bold text-white xl:text-5xl"
          data-node-id="20:351"
        >
          测试与成果
        </h2>
        <p
          className="relative shrink-0 text-[18px] font-normal text-[#a0a0a0]"
          data-node-id="20:352"
        >
          从实验室到北美千万家庭，体验升级的量化支撑
        </p>
        <div
          className="relative h-px w-full shrink-0 bg-[#262626] opacity-20"
          data-node-id="20:353"
          data-name="Divider"
        />
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[40px] xl:flex-row"
        data-node-id="20:354"
        data-name="Frame"
      >
        <div
          className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[24px]"
          data-node-id="20:355"
          data-name="Frame"
        >
          <p className="relative shrink-0 text-[28px] font-bold text-white" data-node-id="20:356">
            体验性能测试
          </p>
          <p
            className="relative w-full min-w-full shrink-0 text-[15px] leading-[1.6] font-normal text-[#a0a0a0]"
            data-node-id="20:357"
          >
            我们邀请了 24 名北美家庭不同年龄阶段的用户进行实际录屏与生理阻抗测试。仅经历 3
            分钟极短的认知磨合后，用户在盲打状态下的操作负荷实现断崖式降低。
          </p>
        </div>
        <div
          className="relative flex w-full shrink-0 flex-col items-start gap-[24px] rounded-[16px] border border-solid border-[#262626] bg-[#161616] p-5 sm:p-8 xl:w-[640px]"
          data-node-id="20:358"
          data-name="Frame"
        >
          <p className="relative shrink-0 text-[20px] font-bold text-white" data-node-id="20:359">
            输入 TDK 3个首字母搜索 The Dark Knight
          </p>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="20:360"
            data-name="Frame"
          >
            <div
              className="relative flex w-full shrink-0 flex-wrap items-start justify-between gap-x-4 gap-y-2 text-[13px]"
              data-node-id="20:361"
              data-name="Frame"
            >
              <p
                className="relative min-w-0 flex-1 font-normal text-[#a0a0a0]"
                data-node-id="20:362"
              >
                电视系统经典全键盘 (QWERTY)
              </p>
              <p className="relative shrink-0 font-bold text-white" data-node-id="20:363">
                14次按键 / 9秒
              </p>
            </div>
            <div
              className="relative flex h-[16px] w-full shrink-0 items-start overflow-clip rounded-[4px] bg-[#262626]"
              data-node-id="20:364"
              data-name="Frame"
            >
              <div
                className="h-full w-full rounded bg-[#666]"
                data-node-id="20:365"
                data-name="Rectangle"
              />
            </div>
          </div>
          <div
            className="relative flex w-full shrink-0 flex-col items-start gap-[8px]"
            data-node-id="20:366"
            data-name="Frame"
          >
            <div
              className="relative flex w-full shrink-0 flex-wrap items-start justify-between gap-x-4 gap-y-2 text-[13px]"
              data-node-id="20:367"
              data-name="Frame"
            >
              <p
                className="relative min-w-0 flex-1 font-normal text-[#a0a0a0]"
                data-node-id="20:368"
              >
                全新五键输入法 (无指针漫游)
              </p>
              <p className="relative shrink-0 font-bold text-[#e1251b]" data-node-id="20:369">
                6.5次按键 / 3秒
              </p>
            </div>
            <div
              className="relative flex h-[16px] w-full shrink-0 items-start overflow-clip rounded-[4px] bg-[#262626]"
              data-node-id="20:370"
              data-name="Frame"
            >
              <div
                className="h-full w-[36%] rounded bg-[#e1251b]"
                data-node-id="20:371"
                data-name="Rectangle"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[24px]"
        data-node-id="20:372"
        data-name="Frame"
      >
        <p className="relative shrink-0 text-[28px] font-bold text-white" data-node-id="20:373">
          Rakuten × TCL 智能盒子 2014 线上表现
        </p>
        <div
          className="relative grid w-full shrink-0 grid-cols-1 items-start gap-[24px] md:grid-cols-3"
          data-node-id="20:374"
          data-name="Frame"
        >
          <div
            className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#161616] p-[24px]"
            data-node-id="20:375"
            data-name="StatBlock"
          >
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] font-medium text-[#a0a0a0]"
              data-node-id="20:376"
            >
              资源查找平均时长
            </p>
            <div
              className="relative flex shrink-0 items-baseline gap-[4px]"
              data-node-id="20:377"
              data-name="ValueRow"
            >
              <p
                className="relative shrink-0 text-4xl font-bold text-[#e1251b] xl:text-5xl"
                data-node-id="20:378"
              >
                22秒
              </p>
              <p
                className="relative shrink-0 text-[16px] font-medium text-[#666]"
                data-node-id="20:379"
              >
                ↓ 下降 48%
              </p>
            </div>
          </div>
          <div
            className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#161616] p-[24px]"
            data-node-id="20:380"
            data-name="StatBlock"
          >
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] font-medium text-[#a0a0a0]"
              data-node-id="20:381"
            >
              单次输入查找按键
            </p>
            <div
              className="relative flex shrink-0 items-baseline gap-[4px]"
              data-node-id="20:382"
              data-name="ValueRow"
            >
              <p
                className="relative shrink-0 text-4xl font-bold text-[#e1251b] xl:text-5xl"
                data-node-id="20:383"
              >
                29次
              </p>
              <p
                className="relative shrink-0 text-[16px] font-medium text-[#666]"
                data-node-id="20:384"
              >
                ↓ 减少 43%
              </p>
            </div>
          </div>
          <div
            className="relative flex min-w-0 flex-[1_0_0] flex-col items-start gap-[16px] rounded-[8px] border border-solid border-[#262626] bg-[#161616] p-[24px]"
            data-node-id="20:385"
            data-name="StatBlock"
          >
            <p
              className="relative w-full min-w-full shrink-0 text-[14px] font-medium text-[#a0a0a0]"
              data-node-id="20:386"
            >
              综合用户体验满意度
            </p>
            <div
              className="relative flex shrink-0 items-baseline gap-[4px]"
              data-node-id="20:387"
              data-name="ValueRow"
            >
              <p
                className="relative shrink-0 text-4xl font-bold text-[#e1251b] xl:text-5xl"
                data-node-id="20:388"
              >
                4.6
              </p>
              <p
                className="relative shrink-0 text-[16px] font-medium text-[#666]"
                data-node-id="20:389"
              >
                / 5.0
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative flex w-full shrink-0 flex-col items-start gap-[24px]"
        data-node-id="20:390"
        data-name="Frame"
      >
        <p className="relative shrink-0 text-[28px] font-bold text-white" data-node-id="20:391">
          用户反馈
        </p>
        <div
          className="grid w-full grid-cols-1 gap-6 xl:grid-cols-3"
          data-node-id="20:392"
          data-name="Frame"
        >
          <div
            className="relative flex h-full min-w-0 flex-[1_0_0] flex-col items-start justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(51,51,51,0.5)] bg-[#161616] p-5 sm:p-8"
            data-node-id="20:393"
            data-name="Frame"
          >
            <p
              className="pointer-events-none absolute top-[-29px] left-[-17px] size-[176px] text-[144px] leading-none font-bold text-white opacity-8"
              data-node-id="60:4"
            >{`"`}</p>
            <p
              className="relative w-full min-w-full shrink-0 text-[15px] leading-[1.6] font-normal text-white"
              data-node-id="20:394"
            >{`" Once I got used to it, everything became so much faster - no more scrolling letter by letter to find a movie. "`}</p>
            <p
              className="relative w-full min-w-full shrink-0 text-[13px] font-normal text-[#666]"
              data-node-id="20:395"
            >
              -- User A, Los Angeles
            </p>
          </div>
          <div
            className="relative flex h-full min-w-0 flex-[1_0_0] flex-col items-start justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(51,51,51,0.5)] bg-[#161616] p-5 sm:p-8"
            data-node-id="20:396"
            data-name="Frame"
          >
            <p
              className="pointer-events-none absolute top-[-29px] left-[-17px] size-[176px] text-[144px] leading-none font-bold text-white opacity-8"
              data-node-id="60:5"
            >{`"`}</p>
            <p
              className="relative w-full min-w-full shrink-0 text-[15px] leading-[1.6] font-normal text-white"
              data-node-id="20:397"
            >{`" I thought it would be hard at first, but I picked it up in two minutes. Now I search for everything this way. "`}</p>
            <p
              className="relative w-full min-w-full shrink-0 text-[13px] font-normal text-[#666]"
              data-node-id="20:398"
            >
              -- User B, San Francisco
            </p>
          </div>
          <div
            className="relative flex h-full min-w-0 flex-[1_0_0] flex-col items-start justify-between overflow-clip rounded-[12px] border border-solid border-[rgba(51,51,51,0.5)] bg-[#161616] p-5 sm:p-8"
            data-node-id="20:399"
            data-name="Frame"
          >
            <p
              className="pointer-events-none absolute top-[-29px] left-[-17px] size-[176px] text-[144px] leading-none font-bold text-white opacity-8"
              data-node-id="60:6"
            >{`"`}</p>
            <p
              className="relative w-full min-w-full shrink-0 text-[15px] leading-[1.6] font-normal text-white"
              data-node-id="20:400"
            >{`" I finally don't have to stare at the remote anymore - I just keep my eyes on the TV. "`}</p>
            <p
              className="relative w-full min-w-full shrink-0 text-[13px] font-normal text-[#666]"
              data-node-id="20:401"
            >
              -- User C, Seattle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
