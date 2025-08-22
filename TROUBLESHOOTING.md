# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### 1. CSS/Styling Not Loading

**Problem:** Website appears unstyled or Tailwind CSS classes aren't working.

**Solutions:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild the project
npm run build
npm run dev
```

**Check these files:**
- `src/index.css` should have `@tailwind` directives at the top
- `tailwind.config.js` should exist and be properly configured
- `postcss.config.js` should include tailwindcss plugin

### 2. Build Errors

**Problem:** `npm run build` fails with PostCSS or Tailwind errors.

**Solution:**
```bash
# Reinstall with specific versions
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@^3.4.0 postcss@^8.4.0 autoprefixer@^10.4.0
npx tailwindcss init -p
```

### 3. Module Import Errors

**Problem:** ES module vs CommonJS conflicts.

**Check `package.json`:**
- Should have `"type": "module"`
- Config files should use `export default` syntax

### 4. Images Not Loading

**Problem:** App images show fallback icons instead of actual images.

**Solutions:**
- Check that image files exist in `public/images/`
- Verify image paths in `apps.json` match actual files
- Use proper image formats (JPG, PNG, WebP)

### 5. Routing Issues

**Problem:** Direct URL access shows 404 or pages don't load.

**For Development:**
- Make sure React Router is properly configured
- Check that all page components are imported in `App.jsx`

**For Production:**
- Configure your hosting provider for SPA routing
- Add `_redirects` file for Netlify: `/* /index.html 200`
- For Apache: add `.htaccess` with rewrite rules

### 6. Font Loading Issues

**Problem:** Google Fonts not loading properly.

**Check:**
- Internet connection for Google Fonts CDN
- Font links in `index.html` are correct
- Font family names in Tailwind config match Google Fonts

### 7. Performance Issues

**Problem:** Slow loading or poor performance.

**Solutions:**
- Optimize images (compress, use WebP)
- Enable gzip compression on server
- Use CDN for static assets
- Check network tab in browser dev tools

## 🚀 Quick Reset

If you're experiencing multiple issues, try this complete reset:

```bash
# Stop any running servers
pkill -f "vite"

# Clean install
rm -rf node_modules package-lock.json dist
npm install

# Rebuild and start
npm run build
npm run dev
```

## 📊 Verification Steps

After fixing issues, verify everything works:

1. **CSS Loading:** Check if gradients and styling appear correctly
2. **Navigation:** Test all menu links and mobile menu
3. **App Cards:** Verify app cards display with proper styling
4. **Responsive Design:** Test on different screen sizes
5. **Animations:** Check hover effects and transitions
6. **Form Functionality:** Test contact form submission
7. **Routing:** Test direct URL access to all pages

## 🔍 Debug Commands

```bash
# Check installed packages
npm list

# Verify Tailwind installation
npm list tailwindcss

# Check for peer dependency issues
npm ls

# Verbose build for debugging
npm run build --verbose

# Check bundle analysis
npm run build && npx vite-bundle-analyzer dist
```

## 📞 Still Having Issues?

1. Check browser console for JavaScript errors
2. Inspect network tab for failed resource loads
3. Verify all dependencies are properly installed
4. Check that you're using a supported Node.js version (16+)
5. Try in incognito/private browsing mode

---

**Most issues are resolved by ensuring Tailwind CSS v3.4.0 is properly installed and configured.**