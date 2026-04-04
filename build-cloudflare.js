const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const targetPaths = [
    path.join(__dirname, 'app/test/[themeId]/page.tsx'),
    path.join(__dirname, 'app/result/page.tsx')
];
const edgeConfig = "\nexport const runtime = 'edge';\n";

let originalContents = new Map();
try {
    for (const targetPath of targetPaths) {
        let content = fs.readFileSync(targetPath, 'utf8');
        originalContents.set(targetPath, content);
        
        if (!content.includes("runtime = 'edge'")) {
            fs.writeFileSync(targetPath, content + edgeConfig);
        }
    }
    console.log("✅ Injected Edge runtime config for Cloudflare build");

    // Run the Cloudflare build
    console.log("🚀 Starting Cloudflare next-on-pages build...");
    execSync('npx @cloudflare/next-on-pages@1', { stdio: 'inherit' });

} catch (error) {
    console.error("❌ Build failed:", error.message);
    process.exitCode = 1;
} finally {
    // Always restore the original content to keep local dev clean
    for (const [targetPath, content] of originalContents.entries()) {
        fs.writeFileSync(targetPath, content);
    }
    console.log("♻️ Restored original files without Edge config");
}
