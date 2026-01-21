# Step-by-Step Testing Guide

## 🧪 Test 1: Direct Link Test (Easiest)

### Open the Test Page
1. Open your browser
2. Go to: **http://localhost:3000/test-links.html**
3. You'll see a test page with all menu and planner links
4. Click each link to verify they open correctly

**Expected Result:** Each link should open the menu/planner in a new tab

---

## 🧪 Test 2: Direct URL Test

### Test Each Menu Directly
Copy and paste these URLs into your browser:

1. **Restaurant Menu:**
   ```
   http://localhost:3000/menus/restaurant-menu.html
   ```

2. **Lounge Menu:**
   ```
   http://localhost:3000/menus/lounge-menu.html
   ```

3. **Bar Menu:**
   ```
   http://localhost:3000/menus/bar-menu.html
   ```

**Expected Result:** Each URL should display a professional A4 menu

---

## 🧪 Test 3: Home Page Test

### Test from the Main Website

1. Go to: **http://localhost:3000**

2. **Scroll down** to find the **"Dining Menu"** section
   - You'll see cuisine options (Indian, Chinese, American, Zimbabwean)
   - Keep scrolling past the buffet options
   - Keep scrolling past the bar & beverages section

3. Look for a **cream-colored box** with the heading:
   **"DOWNLOAD OUR MENUS"**

4. You should see **3 buttons** in a row:
   - Restaurant Menu
   - Lounge Menu
   - Bar Menu

5. Click any button

**Expected Result:** Menu opens in new tab

---

## 🧪 Test 4: Navigation Menu Test

### Test from Dining Page

1. Go to: **http://localhost:3000**

2. Click **"Dining"** in the top navigation bar

3. You'll see three tabs:
   - Restaurant & Buffet
   - Lounge & Bites
   - Libations

4. Click on any tab

5. Look for the **"View Full Menu"** button (gold button with download icon)

6. Click the button

**Expected Result:** Menu opens in new tab

---

## 🧪 Test 5: Planner Downloads Test

### Test Planner Kits

1. Go to: **http://localhost:3000**

2. Scroll down to **"TAILORED EXPERIENCE"** section

3. You'll see three role buttons:
   - Event Planner
   - Wedding Planner
   - Marketer

4. Click **"Event Planner"** button

5. Click **"Download Planner Kit"** button

**Expected Result:** Corporate event planner opens in new tab

6. Repeat for Wedding Planner and Marketer

---

## 🔍 Troubleshooting

### If Links Don't Work:

#### Check 1: Server Running?
```bash
# Server should be running on http://localhost:3000
# You should see "Ready in X.Xs" in the terminal
```

#### Check 2: Hard Refresh Browser
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

#### Check 3: Clear Browser Cache
```
1. Open browser DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"
```

#### Check 4: Check Browser Console
```
1. Press F12 to open DevTools
2. Click "Console" tab
3. Look for any red error messages
4. Share the error if you see one
```

#### Check 5: Try Different Browser
```
- Try Chrome
- Try Edge
- Try Firefox
```

---

## ✅ What You Should See

### When Menu Opens:
- ✅ New browser tab opens
- ✅ Professional A4 layout
- ✅ Marina branding (gold and cream colors)
- ✅ Menu items with prices
- ✅ Print button works (Ctrl+P)

### When Planner Opens:
- ✅ New browser tab opens
- ✅ Professional A4 layout
- ✅ Marina logo and branding
- ✅ Checklists with checkboxes
- ✅ Timeline sections
- ✅ Budget worksheets
- ✅ Print button works (Ctrl+P)

---

## 📊 Testing Checklist

### Menus (3 total)
- [ ] Restaurant menu opens from test page
- [ ] Lounge menu opens from test page
- [ ] Bar menu opens from test page
- [ ] Restaurant menu opens from home page
- [ ] Lounge menu opens from home page
- [ ] Bar menu opens from home page
- [ ] Restaurant menu opens from Dining page
- [ ] Lounge menu opens from Dining page
- [ ] Bar menu opens from Dining page

### Planners (3 total)
- [ ] Corporate planner opens from test page
- [ ] Wedding planner opens from test page
- [ ] Social planner opens from test page
- [ ] Corporate planner opens from Role Selector
- [ ] Wedding planner opens from Role Selector
- [ ] Social planner opens from Role Selector

### Print Test
- [ ] Can print restaurant menu (Ctrl+P)
- [ ] Can print lounge menu (Ctrl+P)
- [ ] Can print bar menu (Ctrl+P)
- [ ] Can save as PDF

---

## 🎯 Quick Test Commands

### Test 1: Open Test Page
```
http://localhost:3000/test-links.html
```

### Test 2: Open Home Page
```
http://localhost:3000
```

### Test 3: Direct Menu Access
```
http://localhost:3000/menus/restaurant-menu.html
http://localhost:3000/menus/lounge-menu.html
http://localhost:3000/menus/bar-menu.html
```

---

## 📱 Mobile Testing

### Test on Mobile Device

1. Find your computer's IP address:
   ```bash
   ipconfig
   # Look for IPv4 Address (e.g., 192.168.1.100)
   ```

2. On your mobile device, open browser and go to:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```

3. Test all download buttons on mobile

---

## 🎉 Success Criteria

All tests pass when:
- ✅ All 6 resources open in new tabs
- ✅ All resources display correctly
- ✅ All resources are print-ready
- ✅ No console errors
- ✅ Works on desktop and mobile
- ✅ Works in multiple browsers

---

## 📞 If Still Not Working

Please provide:
1. Which test failed? (Test 1, 2, 3, 4, or 5)
2. What happens when you click? (Nothing? Error? Wrong page?)
3. Any error messages in browser console? (F12 → Console tab)
4. Which browser are you using?
5. Screenshot of the issue (if possible)

---

**Current Status:** Server running at http://localhost:3000
**Start Here:** http://localhost:3000/test-links.html

*This is the easiest way to test - just click the links on the test page!*
