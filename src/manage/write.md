# 如何写好技术文章
本文的主要目的是提高大家的写作意识和质量，主要分为三个部分：
- 写作的阶段和价值
- 文章结构
- 写作风格

## 写作的阶段和价值
就个人而言，写作可以分为三个阶段：
- 摘录笔记
- 经验案例
- 普适文章

刚进入特定技术领域进行学习时，可以培养摘录笔记的习惯（例如将书中的知识点或者别人的博客技术在自我实践后进行摘录或精简）。

通过自我实践（改良）、精简以及总结可以加深对知识点的理解，同时也可以锻炼自我的文笔书写能力。除此之外，摘录或摘要笔记更便于后续快速回顾当下总结的知识要点。

在工作的过程中，可以记录自己遇到的且难以解决的问题，并记录解决方案。如果问题相对较小，可以进行小问题汇总（便于后续遇到同类问题时可以进行快速定位）。如果问题相对复杂，则可以形成一个体系化的经验案例：
- 发现问题（工作中自己难以解决或者别人帮助解决的问题）
- 技术科普（对于问题所依赖的知识点进行科普，刨根问底一定是深入学习的好方法）
- 问题产生的原因（如果问题偶现那么一定要重点记录问题偶现的环境）
- 如何解决问题（一一列举各种解决问题的方案）
- 总结（总结自己解决问题的技巧、方案的利弊分析以及给出当下最优的解决方案等）
- 参考文档

刚开始写作的时候可能很难形成体系化的文章，此时可以通过积少成多的方式进行慢慢积累（例如尝试书写豆腐块式的小段落）。

## 文章结构
摘要笔记和经验案例可能更多的是面向自我（加深自我对技术的理解和提高文笔能力），此类文档对于读者可能很难有代入感（所遇到的问题越难解决或者记录的笔记越有深度，那么读者的普遍适用性就越差）。

如果你想将你的知识点或经验分享给他人受益，那么一定需要对文章进行抽象、归纳和总结，从而使文章具有更广的通用性。对于这类技术文章建议采用以下结构：
- 前言
- ...
- 总结
- 参考文档

### 文章前言
前言要精简，尽量包含以下几个内容：
- 初衷：让读者明白写这篇文章的主要原因和目的是什么。
- 适合人群：说明文章适合阅读的群体范围，防止文章过于小白或过于深涩时对读者产生副作用，是一种提前打预防针的小技巧。
- 内容结构：主要概括文章的总体内容，从而可以使读者感性的了解文章的大致结构，进一步确认是否要继续阅读或者跳过某些不感兴趣的部分。
- 温馨提示：可以防止读者对文章产生一些使作者意想不到的误解，从而对文章产生一些不利的评论。

### 文章主体
文章主体一定要符合文章前言的内容结构，除此之外内容尽量符合以下一些特性：
- 图文并茂：可以降低读者的阅读疲劳感，切忌大段大段的文本段落，偶尔穿插一些图片、表格或者列表可以降低读者的阅读疲劳感。
- 思维导图
- 框架大图：主要用于进行分层结构的技术分析。
- 表格分类对比：主要用于同类型的内容对比（例如 React、Vue 或 Angular 等框架类型对比），这样可以使读者更加直观的了解各自的差异性。
- 可视化数据分析：主要可针对一些性能优化或者性能监控等技术分析。
- 列表分类：主要用于并行逻辑的内容呈现，这样可以使文章富有逻辑感且文案相对精简，连续的文本内容容易使读者抓不住段落的重点。

### 文章总结
文章总结可以在最后告诉读者以下一些内容：
- 利弊分析
- 局限性及可扩展性
- 注意事项
- 未来发展
- 规律分析
- 横向对比
- 技术结论
- 思想指导
- 集思广益

如果是一些技术方案类的实践总结文章，那么一定需要告诉读者方案的利弊分析、局限性及可扩展性、注意事项等，从而可以有效的使读者决定是否要采用或者借鉴类似的方案，当然如果能够指导读者如何根据业务场景灵活设计技术方案再好不过。

如果是一些技术科普类文章那么一定要告诉读者这类技术当下或未来的适用场景、可发展空间以及同类技术的横向对比等，从而可以指导读者是否需要深入研究该技术。

如果是一些不成熟的技术方案或者前言探索，最好能够提供一些深入阅读的文章链接，除此之外一定需要在文章结论中给出谦虚的表态，希望能够获取更多的建议或者意见，从而防止自己的主观认知带来的不确定性以及可能给读者带来的误导性。

## 写作风格
建议在 VS Code 中采用 Markdown 格式校验插件 markdownlint （设置 Save Auto Fixed 功能进行 Markdown 格式化）、预览插件 Markdown Preview Enhanced 和快捷键插件 Markdown All in One 进行文档编写。

### 标题
- 文章有且仅有 1 个一级标题
- 标题统一采用「#」标记
- 标题逐级递增（例如避免在一级标题下直接新增三级标题）
- 标题的「#」标记和文本之间必须要有 1 个空格，否则类似掘金平台无法识别标题
- 标题和子标题内容避免完全一致
- 标题避免有标点符号 ".,;:!?。，；：！？"
- 标题前后应该有空行
- 标题避免缩进
- 避免出现四级标题，保持简洁
- 避免出现孤儿标题
- 不要使用加粗代替标题
- 如果当前标题下内容过于简洁（例如只有一个简短的段落），可以需要考虑去除标题

温馨提示：标题的作用不仅仅是使读者可以了解文章的整体结构，更多的是可以使读者快速跳转到他想要阅读的部分。

### 列表
- 无序列表统一采用「-」标记
- 首级列表避免缩进，次级列表缩进 2 字符
- 列表前后应该有空行
- 简短的同类型内容进行描述时尽量采用列表的呈现形式（简洁、美观且富有逻辑）

### 代码块
- 在代码块中展示 Shell 命令不需要在命令行前加「$」符号，除非同时需要打印输出信息
- 代码块前后应该有空行
- 代码块必须指定语言类型
- 如果部分代码引用其他的技术文章，则需标明作者和来源链接

### 引用
- 引用标记和内容之间避免有多个空格
- 引用前后应该有空行
- 温馨提示的内容可以采用引用的呈现形式

### 文本
- 当前文本末尾不产生多余的空格
- 不要在文本中使用 HTML 标记
- 不要在文本中直接暴露网址，如果需要可采用 url 形式
- 不要有空白链接
- 英文单词需要有正确的大小写，例如 JavaScript、Android、iOS、iPhone、Google、Apple
- 图片必须有描述文字
- 数字、英文以及英文单位等需要和中文保持 1 个空格，例如：今天是 2020 年 5 月 13 日
- 第一次出现需要解释的缩写术语时在括号中给出英文全名和中文解释，例如 AJAX（ Asynchronous JavaScript And XML，异步 JavaScript 和 XML ）
- 解释性内容可以紧贴文本放在括号后面（这个括号里的内容就是一个解释性内容）
- 如果语句过长，尽量精简到最短
- 除了「%」、「°C」以及倍数单位（例如 2x、3n）以外，其余的数字和单位之间需要保持 1 个空格
- 中文或中英文混排时，一律使用中文 / 全角标点
- 尽量避免使用「!」或「~」，请理性的书写技术文章
- 如果引用别人的图片，那么必须标明图片的来源和链接
- 尽量避免在文本中出现「我」、「我觉得」、「个人觉得」、「我认为」等带有主观色彩的叙述
- 尽量使用主动语态，避免被动语态
- 中文的标点符号和其他字符之间一律不加空格

### 段落
- 段落之间不要产生多个连续的空白行
- 如果部分段落引用其他的技术文章，则需标明作者和来源链接
- 段落开头避免缩进

### 文章
- 如果文章全篇转载，请在全文开头显著位置注明出处并链接至原文
- 如果文章内容过多，那么可以根据内容类型进行分篇处理（保持读者的阅读耐心）

## 总结
本文主要讲解了技术文章的写作技巧，此类技巧对于制作简历也会有所帮助。希望大家平时能够养成写作的好习惯，这是程序员必备的技能之一。
