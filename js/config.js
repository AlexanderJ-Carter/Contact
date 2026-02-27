/**
 * 应用配置 - 单一数据源
 */

/** 本地预览（localhost / file 协议）时跳过人机验证 */
export function isLocalPreview() {
    const { hostname, protocol } = location;
    return (
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        protocol === 'file:'
    );
}

export const CONFIG = {
    email: 'contact-us@alexander.xin',
    github: 'https://github.com/alexanderxin',
    contactTagline: '通常 1–2 个工作日内回复',
    typewriterTexts: [
        '让我们保持联系，探索更多可能',
        '期待与您的深度交流合作',
        '开源爱好者 · 技术探索者',
        '用代码连接世界的每一个角落',
    ],
};
