# 项目结构说明

采用工程化、模块化设计，便于维护与扩展。

## 目录结构

```
Contact/
├── index.html          # 入口 HTML，结构语义化
├── css/
│   ├── main.css        # 主样式入口（按层导入）
│   ├── 01-reset.css    # 样式归一化
│   ├── 02-variables.css# 设计令牌（颜色、间距、圆角等）
│   ├── 03-base.css     # 文档基础、无障碍
│   ├── 04-layout.css   # 布局
│   ├── 05-components.css # 组件样式
│   └── 06-utilities.css  # 工具类
├── js/
│   ├── main.js         # 入口，事件委托与引导
│   ├── config.js       # 配置常量
│   ├── dom.js          # DOM 选择器集中管理
│   ├── toast.js        # 通知
│   ├── clipboard.js    # 剪贴板
│   ├── modal.js        # 模态框
│   ├── verification.js # 人机验证
│   ├── typewriter.js   # 打字机效果
│   └── easter-egg.js   # 彩蛋
├── Photo.png
├── wechat-qr.jpg
└── CNAME
```

## 设计理念

### CSS - ITCSS 分层

- **Reset** → **Variables** → **Base** → **Layout** → **Components** → **Utilities**
- 变量先行，组件依赖变量，避免魔法数字
- 支持 `prefers-color-scheme`、`prefers-reduced-motion`

### JS - 模块化 + 事件委托

- **ES Modules**：各模块单一职责
- **事件委托**：通过 `data-action` 声明式绑定，减少监听器
- **配置集中**：`config.js` 统一管理邮箱、文案等
- **DOM 集中**：`dom.js` 统一选择器，便于重构

### data-action 约定

| data-action         | 说明         |
|---------------------|--------------|
| verification:enter  | 通过验证进入 |
| modal:wechat:open   | 打开微信模态 |
| modal:wechat:close  | 关闭微信模态 |
| schedule:call       | 预约会面     |

### data-copyable 约定

- 元素带 `data-copyable` 和 `data-value` 时，点击复制 `data-value` 到剪贴板
- 用于邮箱等需复制场景，替代直接跳转 mailto

## 扩展建议

- 新增组件：在 `05-components.css` 追加，使用现有变量
- 新增功能：建新模块，在 `main.js` 引入并挂接
- 主题切换：修改 `02-variables.css` 中的 `:root` 或新增主题类
