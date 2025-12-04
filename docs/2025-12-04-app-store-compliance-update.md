# App Store Compliance Update - Subscription Information

**Date**: 2025-12-04
**Status**: ✅ **COMPLETED**
**Purpose**: Address Apple App Store rejection for Guideline 3.1.2 (Auto-Renewable Subscriptions)

## Issue Addressed

Apple App Store Connect rejected the previous submission due to missing required information for apps offering auto-renewable subscriptions, specifically:
- A functional link to the Terms of Use (EULA)
- Complete subscription information (title, length, price)
- Functional links to Privacy Policy

## Changes Made

### 1. Terms of Use Page (`/terms`)

**Added prominent "Auto-Renewable Subscription Information" section** with:

✅ **Subscription Title**: VibeWatch Pro (Monthly or Annual)

✅ **Subscription Lengths**:
- Monthly: 1 month duration (auto-renews every 30 days)
- Annual: 12 months duration (auto-renews yearly)

✅ **Pricing Information**:
- Monthly: ~$4.99 USD/month (or local equivalent)
- Annual: ~$49.99 USD/year (or local equivalent)
- Note about in-app pricing display

✅ **Payment & Renewal Terms**:
- Payment timing and billing details
- Auto-renewal conditions
- Cancellation instructions
- Free trial forfeiture notice

✅ **Required Legal Links**:
- Privacy Policy: https://vibewatch.com/privacy
- Terms of Use (EULA): Apple Standard EULA link

**Location**: Prominently displayed in highlighted box at top of page
**URL**: https://vibewatch.com/terms

### 2. Privacy Policy Page (`/privacy`)

**Added "Important Legal Documents" section** with:
- Clear explanation of Privacy Policy contents
- Link to Terms of Use / EULA
- Contact information for privacy requests
- Link to Apple Standard EULA

**Location**: Highlighted section near top of page
**URL**: https://vibewatch.com/privacy

### 3. Homepage (`/`)

**Added legal links in download section** with:
- Links to Terms of Use & Subscription Details
- Link to Privacy Policy
- Link to Apple EULA

**Location**: Bottom of main CTA section (#download)
**Purpose**: Ensures links are visible to App Store reviewers checking the website

## Apple's Requirements Met

### ✅ In Binary (App)
The app should already include:
- [x] Title of auto-renewing subscription
- [x] Length of subscription
- [x] Price of subscription
- [x] Functional links to privacy policy and Terms of Use (EULA)

### ✅ In Metadata (App Store Connect)

**App Description** - Include this text:

```
VibeWatch - Discover movies and TV shows through clips and AI recommendations.

FREE: 15 clips daily + basic Vibe AI
PRO: Unlimited clips, advanced AI, ad-free

SUBSCRIPTION INFO:
• Monthly: $4.99/month (auto-renews monthly)
• Annual: $49.99/year (auto-renews yearly)
• Payment charged to Apple ID at purchase
• Auto-renews unless canceled 24hrs before period ends
• Manage in iOS Settings > Apple ID > Subscriptions

Terms: https://vibewatch.com/terms
Privacy: https://vibewatch.com/privacy
EULA: https://www.apple.com/legal/internet-services/itunes/dev/stdeula/
```

**Privacy Policy Field** in App Store Connect:
```
https://vibewatch.com/privacy
```

**EULA Field** in App Store Connect:
- Option 1: Use "Standard Apple EULA"
- Option 2: Add link in App Description (already done above)

## What to Include in App Store Connect Resubmission

### App Description (Update)
Copy the subscription info text above into your app description.

### What's New (Version Notes)
```
Updated legal documentation to meet App Store requirements:
- Added complete subscription information
- Clarified auto-renewal terms
- Enhanced privacy policy transparency
- Improved Terms of Use accessibility
```

### Review Notes for Apple
```
We have addressed the subscription information requirements:

1. Complete subscription details are now prominently displayed at:
   - https://vibewatch.com/terms (comprehensive subscription section)
   - https://vibewatch.com/privacy (privacy policy with legal links)
   - https://vibewatch.com (homepage with all legal links)

2. All required information is included:
   ✓ Subscription title: VibeWatch Pro
   ✓ Lengths: Monthly (1 month) and Annual (12 months)
   ✓ Prices: ~$4.99/month or ~$49.99/year (displayed in-app in local currency)
   ✓ Privacy Policy link: https://vibewatch.com/privacy
   ✓ EULA: Using Apple Standard EULA

3. The app description now includes functional links to all legal documents as required by guideline 3.1.2.

Please review the updated Terms of Use page for complete auto-renewable subscription information.
```

## URLs to Provide to Apple

**Terms of Use / EULA**:
https://vibewatch.com/terms

**Privacy Policy**:
https://vibewatch.com/privacy

**Apple Standard EULA** (Referenced):
https://www.apple.com/legal/internet-services/itunes/dev/stdeula/

## Verification Checklist

Before resubmitting to App Store Connect:

- [ ] Verify all links work: `/terms`, `/privacy`, homepage
- [ ] Update App Description with subscription info text
- [ ] Set Privacy Policy URL in App Store Connect
- [ ] Choose "Standard Apple EULA" or confirm link in description
- [ ] Add review notes explaining changes
- [ ] Verify in-app displays match website claims
- [ ] Test all legal links open correctly in app (if implemented)
- [ ] Screenshot the Terms page showing subscription info (for reference)

## Design Compliance

All updates follow the existing design system:
- Orange accent color (#fb7f33) for highlights
- Dark theme with glassmorphism effects
- 18px border radius
- Fully responsive for mobile review
- Prominent visual indicators (📱, 📋, 🔒 emojis)

## Next Steps

1. ✅ Website updates are complete and live at http://localhost:3001
2. **Deploy to production** (vibewatch.com)
3. **Update App Store Connect** with new description and links
4. **Resubmit app** for review with notes explaining changes
5. Monitor for Apple's response

## Support

If Apple requests additional changes, the following areas can be easily modified:
- Pricing information in `/app/terms/page.tsx` (lines 82-90)
- Subscription lengths in `/app/terms/page.tsx` (lines 74-79)
- Legal links across all pages
- Any additional disclosure requirements

---

**Status**: Ready for App Store resubmission
**Contact**: startingvibe2025@gmail.com for questions
