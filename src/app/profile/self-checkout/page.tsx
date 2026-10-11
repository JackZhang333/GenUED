/* eslint-disable @next/next/no-img-element -- Use the original Figma assets and preserve SVG intrinsic dimensions. */
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "便利店自助收银流程优化 | Johnny Zhang",
  description:
    "店加自助收银产品设计案例：通过现场观察、快捷支付与状态反馈优化，让首次使用者独立完成结账。",
};

const assetPath = "/profile/assets/self-checkout/";
const panelClass = "rounded-lg border border-[#e2e8f0] bg-white";
const sections = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "impact", label: "Impact" },
];

const contextCards = [
  {
    title: "产品目标",
    body: "分担早餐等高峰时段的收银压力，缩短顾客等待时间，减少店员在结账环节的投入。",
    icon: "target.svg",
  },
  {
    title: "上线问题",
    body: "许多新用户需要店员在旁指导，部分用户尝试失败后转去人工收银，没有达到分流和提效目的。",
    icon: "alert-triangle.svg",
  },
  {
    title: "我的职责",
    body: "组织现场研究、定义问题、设计整体交互方案，推动产品、研发、支付业务与门店共同验证。",
    icon: "user-check.svg",
  },
] as const;

const metricHeaders = ["核心观察指标", "具体定义与衡量方式"] as const;

const metricRows = [
  [
    "首次用户无协助完成率",
    "无人工提示或代操作、成功付款的人数，除以首次尝试使用自助收银设备的总人数。",
  ],
  [
    "店员介入率",
    "结账过程中发生店员口头指导、物理干预或代替操作的人数，除以首次尝试使用自助收银设备的总人数。",
  ],
  [
    "成功交易耗时中位数",
    "顾客从录入第一件商品条码成功开始，到最终支付成功并打印凭证的总耗时中位数。",
  ],
] as const;

const observationHeaders = ["观察到的用户行为特征", "样本数 (60人)", "占比"] as const;

const observationRows = [
  ["扫完商品后，直接在设备前出示手机付款码（未触发结算）", "32 人", "53.3%"],
  ["点击“去付款”后，在未点选具体支付方式的情况下即出示付款码", "13 人", "21.7%"],
  ["按屏幕原有引导，按部就班完成所有选按点击后付款", "15 人", "25.0%"],
] as const;

const baseline = [
  ["无协助完成率 (基线)", "40.0%"],
  ["店员介入率 (基线)", "46.7%"],
  ["成功交易耗时中位数 (基线)", "104 秒"],
] as const;

const interviews = [
  {
    count: "8",
    title: "预期扫完商品后即可出示付款码",
    quote:
      "“在人工柜台结账就是扫完东西直接扫手机，我以为这里的机器也会自动扣款，结果傻等了半天没有反应。”",
  },
  {
    count: "7",
    title: "主要关注商品和手机，没留意按钮",
    quote:
      "“我的眼睛一直盯着扫码口和我的微信钱包，根本没抬头看屏幕右下角还有一个不起眼的‘去付款’按钮。”",
  },
  {
    count: "3",
    title: "注意到按钮但不理解是必要条件",
    quote:
      "“看到了右下角的按钮，但觉得扫完码难道不就是付款吗？为什么还要多按一下多此一举，以为那是选会员卡用的。”",
  },
] as const;

const solutions = [
  {
    label: "方案 A",
    title: "被动防御：弹窗引导流程",
    body: "保留原有的系统结算流程。当识别到用户在未结账页面提前出示了付款码时，系统进行拦截并弹出强提示引导，指导用户点击屏幕右下角的「去付款」并选择支付渠道。",
    validation: "• 错误发生时的明确指导，是否能帮助用户在没有店员的情况下独立完成纠错？",
  },
  {
    label: "方案 B",
    title: "主动顺应：快捷支付流程",
    body: "系统架构升级。在商品录入页面直接集成聚合支付识别，无需用户进行任何屏幕选择，只要检测到付款码便自动识别渠道并扣款，将系统流程向用户的直觉妥协。",
    validation: "• 让系统去适应用户已在尝试的快捷路径，是否能彻底消除流程中的挫败与求助？",
  },
] as const;

const collaboration = [
  [
    "1. 研发架构验证",
    "硬件识别逻辑重构，优化底层高频扫描算法，精准区分商品码、优惠券码与用户的付款码。",
  ],
  [
    "2. 支付渠道接入",
    "评估聚合扫码扣款链路，统一数据回调接口，确保多种主流付款方式均能极速识别与清算。",
  ],
  [
    "3. 门店试点协同",
    "推动门店营运部门安排早高峰实地灰度测试，店员由“现场协助操作”转为“仅负责异常监护”。",
  ],
] as const;

const originalFlow = [
  "1. 扫描商品",
  "2. 点击“去付款”",
  "3. 选择支付方式",
  "4. 出示付款码并扣款",
] as const;

const testingHeaders = [
  "核心评估指标",
  "旧有流程 (Control)",
  "方案 A (弹窗引导)",
  "方案 B (快捷支付初版)",
] as const;

const testingRows = [
  ["无协助完成率", "40.0% (8/20)", "60.0% (12/20)", "80.0% (16/20)"],
  ["店员介入率", "46.7%", "36.7%", "6.7%"],
  ["放弃或转人工结账", "3 / 20 人", "1 / 20 人", "1 / 20 人"],
  ["交易耗时中位数", "104 秒", "92 秒", "78 秒"],
] as const;

const impactHeaders = ["核心业务指标", "优化前", "优化后"] as const;

const impactRows = [
  ["无协助首次使用完成率", "40.0%", "86.0%"],
  ["店员介入率", "46.7%", "12.0%"],
  ["放弃率（转去人工柜台）", "20.0%", "4.0%"],
  ["首笔订单完成耗时中位数", "104 秒", "68 秒"],
] as const;

const reflections = [
  [
    "01 / 既有经验主导线下行为",
    "用户在线下自助收银时的心理预期，完全建立在“人工收银台”长期养成的“扫完商品直接对准扫码枪”的心智模型上。设计产品时不应挑战已经根深蒂固的用户习惯，而应竭力接住用户的这种直觉。",
  ],
  [
    "02 / 线下环境中的注意力极易流失",
    "不同于纯线上静态应用，线下场景中的用户需要在短时间内处理纸质小票、商品摆放、手机找页面等大量物理行为，多在屏幕上增加一次信息确认、逻辑判断，体验崩溃的几率就会翻倍增加。",
  ],
  [
    "03 / 极简操作需要更强的信息闭环",
    "当我们为了实现“零人工点击”而大幅剪裁用户的物理操作后，系统响应与信息回执必须以高强度的多模态反馈（强画面、清脆声音、实体吐票）同步，方可消除“无操作自动扣款”引起的安全不确定感。",
  ],
] as const;

export default function SelfCheckoutCasePage() {
  return (
    <main
      lang="zh-CN"
      className="min-h-screen bg-[#f8fafc] font-sans text-[#0f172a] selection:bg-[#99f6e4] selection:text-[#0f172a] [&_a]:rounded [&_a]:underline-offset-4 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-[#0d9488] [&_a:hover]:underline"
    >
      <article className="mx-auto flex max-w-[1440px] flex-col gap-1 bg-[#0d9488]">
        <CaseBlock id="overview" className="xl:min-h-[1524px]">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <a href="/profile" className="text-lg font-semibold sm:text-xl">
                ← PRODUCT DESIGN PORTFOLIO
              </a>
              <span aria-hidden="true" className="h-4 w-px bg-[#e2e8f0]" />
              <span className="text-sm text-[#64748b]">CASE STUDY</span>
            </div>
            <nav
              aria-label="案例章节"
              className="flex flex-wrap gap-x-6 gap-y-3 text-[15px] text-[#64748b] xl:gap-10"
            >
              {sections.map(({ id, label }) => (
                <a key={id} href={`#${id}`}>
                  {label}
                </a>
              ))}
            </nav>
          </header>
          <div className="flex flex-col gap-12 py-4 xl:py-10">
            <div className="flex flex-col gap-6">
              <span className="w-fit rounded border border-[#99f6e4] bg-[#f0fdfa] px-2.5 py-1 text-xs font-semibold text-[#0d9488]">
                产品设计 / 流程优化
              </span>
              <h1 className="text-[38px] leading-[1.2] font-semibold sm:text-[48px] xl:min-h-[100px] xl:text-[56px]">
                便利店自助收银流程优化
              </h1>
              <p className="text-2xl leading-snug text-[#334155] xl:min-h-[100px] xl:text-[28px]">
                从「需要店员教」到「首次使用也能独立完成」
              </p>
              <ul className="flex flex-wrap items-center gap-6 pt-3 text-sm text-[#64748b]">
                <li className="font-semibold text-[#0f172a]">数字化产品经理</li>
                <li aria-hidden="true">·</li>
                <li className="text-[#334155]">店加</li>
                <li aria-hidden="true">·</li>
                <li>2019</li>
              </ul>
            </div>
            <figure
              data-node-id="67:298"
              className="relative aspect-[1248/451] overflow-hidden rounded-lg"
            >
              <img
                src={`${assetPath}image1.png`}
                alt="便利店顾客使用自助收银设备结账的现场"
                width={1672}
                height={941}
                fetchPriority="high"
                className="absolute top-[-24.88%] left-0 h-[155.74%] w-full max-w-none"
              />
            </figure>
          </div>
          <AssetDivider name="line.svg" />
          <section className="space-y-10" aria-labelledby="context-title">
            <SectionHeading id="context-title" eyebrow="CONTEXT" title="项目背景" />
            <div className="grid gap-8 lg:grid-cols-3">
              {contextCards.map(({ title, body, icon }) => (
                <div key={title} className={cn(panelClass, "space-y-4 p-6 xl:p-7")}>
                  <h3 className="flex items-center gap-2 font-bold">
                    <Asset name={icon} className="size-5 object-contain" />
                    {title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#334155]">{body}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="space-y-8 pt-6" aria-labelledby="metrics-title">
            <SectionHeading
              id="metrics-title"
              eyebrow="OBSERVABLE METRICS"
              title="将业务目标转化为可观察指标"
              description="聚焦购买 1-3 件有条码商品、使用手机付款的顾客"
            />
            <DataTable label="核心观察指标定义" headers={metricHeaders} rows={metricRows} />
          </section>
        </CaseBlock>

        <CaseBlock id="research" className="xl:min-h-[1024px]">
          <Breadcrumb current="现场观察与痛点定义" />
          <section className="space-y-8" aria-labelledby="research-title">
            <SectionHeading
              id="research-title"
              eyebrow="FIELD OBSERVATION"
              title="现场行为观察"
              description="3家门店连续观察3天，记录60名首次使用者，定位用户具体在哪里受阻"
            />
            <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
              <DataTable
                label="首次使用者行为观察"
                headers={observationHeaders}
                rows={observationRows}
                highlightLast
              />
              <aside className="space-y-5 rounded-lg border border-[#99f6e4] bg-[#f0fdfa] p-6 xl:p-8">
                <p className="text-sm font-bold text-[#0d9488]">CRITICAL DISCOVERY</p>
                <p className="text-[32px] leading-tight font-semibold">75% 的用户</p>
                <p className="text-2xl font-semibold text-[#0d9488]">提前出示了付款码</p>
                <p className="text-sm leading-normal text-[#334155]">
                  大部分用户的日常习惯是“扫码枪对准付款码”，导致其默认扫完商品即可直接扣款，与系统设定需要多次点击的流程发生严重冲突。
                </p>
              </aside>
            </div>
            <dl className="grid gap-6 pt-3 sm:grid-cols-3">
              {baseline.map(([label, value], index) => (
                <div key={label} className={cn(panelClass, "space-y-2 rounded-md p-5")}>
                  <dt className="text-[13px] text-[#64748b]">{label}</dt>
                  <dd className={cn("text-4xl font-bold", index === 1 && "text-[#ef4444]")}>
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="space-y-8 pt-6" aria-labelledby="interviews-title">
            <SectionHeading
              id="interviews-title"
              eyebrow="CONTEXTUAL INTERVIEWS"
              title="情境访谈"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {interviews.map(({ count, title, quote }) => (
                <div key={title} className={cn(panelClass, "space-y-4 p-6")}>
                  <p className="flex items-baseline gap-2">
                    <span className="text-[32px] font-bold text-[#0d9488]">{count}</span>
                    <span className="text-sm text-[#64748b]">人</span>
                  </p>
                  <h3 className="text-[15px] font-bold">{title}</h3>
                  <blockquote className="text-sm leading-relaxed text-[#475569]">
                    {quote}
                  </blockquote>
                </div>
              ))}
            </div>
          </section>
          <Callout eyebrow="THE DESIGN CHALLENGE">
            <p className="text-xl leading-normal font-semibold xl:text-2xl">
              如何让系统接住用户已经表达的付款意图，减少首次使用者对流程的学习，同时保留清晰的交易反馈和异常处理能力？
            </p>
          </Callout>
        </CaseBlock>

        <CaseBlock id="design" className="xl:min-h-[1550px]">
          <Breadcrumb current="方案推导与可用性测试" />
          <section className="space-y-10" aria-labelledby="design-title">
            <SectionHeading
              id="design-title"
              eyebrow="SOLUTION GENERATION"
              title="方案推导与假设验证"
              description="针对“用户提前出示付款码”的行为，我们设计了两种不同方向的解决方案进行对比测试"
            />
            <div className="grid gap-8 lg:grid-cols-2">
              {solutions.map(({ label, title, body, validation }, index) => (
                <div
                  key={label}
                  className={cn(
                    panelClass,
                    "min-w-0 space-y-5 rounded-xl p-6 xl:p-8",
                    index === 1 && "border-[#99f6e4] bg-[#f0fdfa]",
                  )}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={cn(
                        "rounded bg-[#f1f5f9] px-2.5 py-1 text-xs font-bold text-[#475569]",
                        index === 1 && "bg-[#0d9488] text-white",
                      )}
                    >
                      {label}
                    </span>
                    <h3 className="text-xl font-bold">{title}</h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#334155]">{body}</p>
                  <AssetDivider name={index === 0 ? "line1.svg" : "line2.svg"} />
                  <div className="space-y-2 text-sm">
                    <p className="font-semibold text-[#64748b]">验证重点</p>
                    <p className="leading-relaxed text-[#334155]">{validation}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <FlowComparison />
          <section className="space-y-6" aria-labelledby="collaboration-title">
            <div className="space-y-2">
              <h2 id="collaboration-title" className="text-2xl font-semibold">
                实现这一改变的跨团队协同
              </h2>
              <p className="text-[15px] text-[#64748b]">
                此方案并非单纯的界面调整，更需要打通硬件、支付以及多条业务线的支持
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {collaboration.map(([title, body]) => (
                <div key={title} className={cn(panelClass, "space-y-3 p-5")}>
                  <h3 className="text-[15px] font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#475569]">{body}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="space-y-8" aria-labelledby="testing-title">
            <SectionHeading
              id="testing-title"
              eyebrow="USABILITY TESTING"
              title="对比可用性测试"
              description="组织60名首次使用该便利店自助收银设备的新用户，平均分为3组（每组20人）开展控制测试"
            />
            <DataTable
              label="三组方案可用性测试结果"
              headers={testingHeaders}
              rows={testingRows}
              highlightLast
              wide
            />
            <aside className="space-y-3 rounded-lg border border-[#99f6e4] bg-[#f0fdfa] p-6">
              <p className="text-sm font-bold text-[#0d9488]">TESTING INSIGHT</p>
              <h3 className="text-[15px] font-bold">
                快捷支付初版暴露全新认知瓶颈：付款后的“状态迷茫”
              </h3>
              <p className="text-sm leading-relaxed text-[#334155]">
                测试观察发现，方案
                B（快捷支付）虽然极大地减少了操作阻碍，但由于系统识别扫码后需要大约 8-12
                秒的数据通信与清算响应，此期间屏幕没有任何状态更新，许多用户出现不知所措、重复出示付款码或在未扣款成功前怀疑交易失败而选择拿走商品。
              </p>
            </aside>
          </section>
        </CaseBlock>

        <CaseBlock id="impact" className="xl:min-h-[1550px]">
          <Breadcrumb current="改版成果、复盘与反思" />
          <section className="space-y-8" aria-labelledby="iteration-title">
            <SectionHeading
              id="iteration-title"
              eyebrow="DESIGN ITERATION"
              title="等待阶段的精细化迭代"
              description="不让极简流程卡在等待的空白期，在“识别”到“完成结账”之间补齐闭环体验"
            />
            <div className="grid gap-8 lg:grid-cols-2">
              <div className={cn(panelClass, "space-y-4 p-6 xl:p-7")}>
                <h3 className="flex items-center gap-2">
                  <Asset name="settings.svg" />
                  技术响应极速调优
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  产品设计
                  团队联合支付研发对付款码请求、后台清算到前台响应的链路进行深度吞吐量调优。将交易等待耗时由原本的平均{" "}
                  <strong className="text-[#ef4444]">12 秒级</strong> 直接压降至{" "}
                  <strong className="text-[#0d9488]">4 秒内</strong>，彻底减少物理延迟。
                </p>
              </div>
              <div className={cn(panelClass, "space-y-4 p-6 xl:p-7")}>
                <h3 className="flex items-center gap-2">
                  <Asset name="paintbrush.svg" />
                  设计补充强状态反馈
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  界面动效即时干预：一旦扫到付款码，屏幕瞬间高亮并伴随清脆的音效，提示「已识别付款码，正在安全支付...」。加载完成后切换至全屏明亮的绿色结果页，让感知闭环无断点。
                </p>
              </div>
            </div>
            <aside className="flex items-start gap-2 rounded-md border border-[#99f6e4] bg-[#f0fdfa] p-5 text-sm leading-normal text-[#0d9488]">
              <Asset name="check-circle.svg" className="mt-0.5" />
              <p>
                复测验证：在迭代后对另 30 名全新首次使用者复测。结果显示，26人
                在没有任何引导和指导下顺畅独立完成结账，交易耗时中位数进一步降至 66 秒。
              </p>
            </aside>
          </section>
          <section className="space-y-8" aria-labelledby="impact-title">
            <SectionHeading
              id="impact-title"
              eyebrow="LAUNCH IMPACT"
              title="全面上线验证"
              description="3家门店开展了为期14天的实地试运行。在产生的 2000 笔自助订单中，高达 1300 笔（65.0%）自动通过“快捷支付”完成"
            />
            <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
              <DataTable
                label="上线前后核心业务指标"
                headers={impactHeaders}
                rows={impactRows}
                highlightLast
              />
              <aside className="space-y-5 rounded-lg bg-[#0d9488] p-6 xl:p-8">
                <p className="text-sm font-bold text-[#99f6e4]">KEY ACHIEVEMENTS</p>
                <div className="space-y-1">
                  <p className="text-[32px] font-semibold text-white">+46%</p>
                  <p className="text-sm text-[#e2fbf6]">无协助首次完成率提升</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[32px] font-semibold text-white">-35%</p>
                  <p className="text-sm text-[#e2fbf6]">交易结账总耗时中位数缩短</p>
                </div>
                <p className="text-[13px] leading-normal text-[#99f6e4]">
                  真正将自助收银机转变为店面可独立分流的提效工具，大幅度减少了早高峰人工通道的排队等待时间。
                </p>
              </aside>
            </div>
          </section>
          <section className="space-y-8" aria-labelledby="reflection-title">
            <SectionHeading
              id="reflection-title"
              eyebrow="PROJECT REFLECTION"
              title="项目复盘与认知沉淀"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {reflections.map(([title, body]) => (
                <div key={title} className={cn(panelClass, "space-y-4 p-6")}>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#475569]">{body}</p>
                </div>
              ))}
            </div>
          </section>
          <Callout eyebrow="MY CONTRIBUTION & LEADERSHIP">
            <p className="text-[15px] leading-relaxed text-[#334155]">
              作为该项目的 <strong className="text-[#0f172a]">数字化产品经理</strong>
              ，我的核心价值不仅体现在交互原型的输出，更体现在对团队认知的对齐：通过实地观察带回真实行为特征、用访谈解读心智动机、用严格的可用性测试数据说服多方业务并推动研发重构支付逻辑，使体验的价值首次在线下业务大仓中得到量化证明与完美落地。
            </p>
          </Callout>
        </CaseBlock>
      </article>
      <footer className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-6 border-t border-[#e2e8f0] px-6 py-10 text-sm text-[#64748b] sm:px-10 xl:px-24">
        <a href="/profile">← 返回 Profile</a>
        <a href="#overview">回到顶部 ↑</a>
      </footer>
    </main>
  );
}

function CaseBlock({
  id,
  className,
  children,
}: PropsWithChildren<{ id: string; className?: string }>) {
  return (
    <section
      id={id}
      className={cn(
        "flex min-w-0 scroll-mt-6 flex-col gap-12 bg-[#f8fafc] px-6 py-16 sm:px-10 xl:gap-16 xl:px-24 xl:pt-20 xl:pb-24",
        className,
      )}
    >
      {children}
    </section>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-3">
      <p className="flex items-center gap-2 text-sm font-bold text-[#0d9488]">
        <span aria-hidden="true" className="h-1 w-3 shrink-0 rounded-sm bg-[#0d9488]" />
        {eyebrow}
      </p>
      <h2 id={id} className="text-[28px] leading-tight font-semibold xl:text-[32px]">
        {title}
      </h2>
      {description && <p className="text-base leading-normal text-[#64748b]">{description}</p>}
    </div>
  );
}

function Breadcrumb({ current }: { current: string }) {
  return (
    <p className="flex flex-wrap gap-2 text-sm text-[#64748b]">
      <a href="#overview">便利店自助收银流程优化</a>
      <span aria-hidden="true">/</span>
      <span className="font-semibold text-[#0d9488]">{current}</span>
    </p>
  );
}

function Asset({ name, className }: { name: string; className?: string }) {
  return (
    <img
      src={`${assetPath}${name}`}
      alt=""
      className={cn("block max-w-none shrink-0", className)}
    />
  );
}

function AssetDivider({ name }: { name: string }) {
  return (
    <div aria-hidden="true" className="h-px w-full overflow-hidden">
      <Asset name={name} />
    </div>
  );
}

function Callout({ eyebrow, children }: PropsWithChildren<{ eyebrow: string }>) {
  return (
    <aside className={cn(panelClass, "rounded-xl p-6 xl:p-10")}>
      <div className="space-y-4 border-l-4 border-[#0d9488] pl-5 xl:pl-7">
        <p className="text-[13px] font-bold text-[#0d9488]">{eyebrow}</p>
        {children}
      </div>
    </aside>
  );
}

function DataTable({
  label,
  headers,
  rows,
  highlightLast = false,
  wide = false,
}: {
  label: string;
  headers: readonly string[];
  rows: readonly (readonly string[])[];
  highlightLast?: boolean;
  wide?: boolean;
}) {
  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={wide ? 0 : undefined}
      className={cn(
        panelClass,
        "min-w-0 overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d9488]",
      )}
    >
      <table
        className={cn(
          "w-full table-fixed border-collapse text-left text-sm",
          wide && "min-w-[620px]",
        )}
      >
        <caption className="sr-only">{label}</caption>
        <thead className="bg-[#f0fdfa]">
          <tr>
            {headers.map((header, index) => (
              <th
                scope="col"
                key={header}
                className={cn(
                  "px-3 py-4 align-top font-bold sm:px-5",
                  index > 0 && headers.length > 2 && "text-right",
                  highlightLast && index === headers.length - 1 && "text-[#0d9488]",
                  index === 0 && headers.length === 3 && "w-1/2 xl:w-1/3",
                )}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-[#e2e8f0]">
              {row.map((cell, index) =>
                index === 0 ? (
                  <th
                    key={index}
                    scope="row"
                    className="px-3 py-5 text-[14px] leading-normal font-normal text-[#334155] sm:px-5"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={index}
                    className={cn(
                      "px-3 py-5 leading-normal text-[#475569] sm:px-5",
                      headers.length > 2 && "text-right",
                      highlightLast && index === row.length - 1 && "font-bold text-[#0d9488]",
                      index === 1 && cell === "46.7%" && "text-[#ef4444]",
                    )}
                  >
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FlowComparison() {
  return (
    <section
      aria-labelledby="flow-title"
      className={cn(panelClass, "space-y-8 rounded-xl p-6 xl:p-10")}
    >
      <h2 id="flow-title" className="text-xl font-semibold">
        核心用户操作路径对比
      </h2>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <h3 className="w-[120px] shrink-0 text-sm font-bold text-[#64748b]">原有操作链</h3>
          <ol className="flex flex-wrap items-center gap-2">
            {originalFlow.map((step, index) => (
              <li key={step} className="flex max-w-full items-center gap-2">
                {index > 0 && <Asset name="chevron-right.svg" />}
                <span
                  className={cn(
                    "rounded-md px-4 py-2 text-sm",
                    index === 0
                      ? "bg-[#e2e8f0] text-[#1e293b]"
                      : index === 3
                        ? "bg-[#475569] text-white"
                        : "border border-[#fecaca] bg-[#fef2f2] text-[#ef4444]",
                  )}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div aria-hidden="true" className="h-px overflow-hidden">
          <img
            src={`${assetPath}line3.png`}
            alt=""
            width={1168}
            height={1}
            className="block h-px w-[1168px] max-w-none"
          />
        </div>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <h3 className="w-[120px] shrink-0 text-sm font-bold text-[#0d9488]">优化后操作链</h3>
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <ol className="flex flex-wrap items-center gap-2">
              <li className="rounded-md bg-[#e2e8f0] px-4 py-2 text-sm text-[#1e293b]">
                1. 扫描商品
              </li>
              <li className="flex max-w-full min-w-0 items-center gap-2">
                <Asset name="chevron-right1.svg" />
                <span className="rounded-md bg-[#0d9488] px-4 py-2 text-sm font-semibold text-white">
                  2. 直接出示付款码 (即刻完成付款)
                </span>
              </li>
            </ol>
            <span className="rounded border border-[#99f6e4] bg-[#f0fdfa] px-3 py-1.5 text-xs font-semibold text-[#0d9488]">
              减少2次手动点击
            </span>
          </div>
        </div>
      </div>
      <aside className="flex items-start gap-2 rounded-lg bg-[#f8fafc] p-4">
        <Asset name="lightbulb.svg" className="mt-0.5" />
        <p className="min-w-0 text-sm leading-normal text-[#475569]">
          <strong className="font-normal text-[#0f172a]">体验重心转移</strong>
          ：将原本需要由用户在大屏幕上承担的“流程切换”和“支付渠道选择”等认知负担，完全转由后台系统及扫码终端硬件进行智能识别与切换。
        </p>
      </aside>
    </section>
  );
}
