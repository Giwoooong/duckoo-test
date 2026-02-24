const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const targetPath = path.join(__dirname, 'app/test/[themeId]/page.tsx');
const edgeConfig = "\nexport const runtime = 'edge';\n";

let originalContent = '';
try {
    originalContent = fs.readFileSync(targetPath, 'utf8');

    // Only add if not already present
    if (!originalContent.includes("runtime = 'edge'")) {
        fs.writeFileSync(targetPath, originalContent + edgeConfig);
        console.log("✅ Injected Edge runtime config for Cloudflare build");
    }

    // Run the Cloudflare build
    console.log("🚀 Starting Cloudflare next-on-pages build...");
    execSync('npx @cloudflare/next-on-pages@1', { stdio: 'inherit' });

} catch (error) {
    console.error("❌ Build failed:", error.message);
    process.exitCode = 1;
} finally {
    // Always restore the original content to keep local dev clean
    if (originalContent) {
        fs.writeFileSync(targetPath, originalContent);
        console.log("♻️ Restored original file without Edge config");
    }
}
