# **PRODUCT REQUIREMENTS DOCUMENT**

**Naureen Akhtar Raja & Co. — Corporate Website**

* * *

## **EXECUTIVE SUMMARY**

**Product Name:** Naureen Akhtar Raja & Co. — Official Website

**Product Vision:** A professional, fully static corporate website for Naureen Akhtar Raja & Co., a chartered accountancy firm. The website serves as the firm's digital presence — communicating its services, industry expertise, firm identity, and providing a direct channel for prospective clients to make contact. The site must convey credibility, professionalism, and depth of expertise across all pages.

**Core Purpose:** To establish a polished online presence for the firm that allows potential clients to explore services and industry focus areas, understand the firm's values and background, and reach out directly via a contact form powered by EmailJS — all without any backend infrastructure.

**Target Users:** Prospective clients (business owners, CFOs, executives), existing clients seeking information, and industry partners or referrals researching the firm.

**Key MVP Features:**

-   **Homepage** — Hero section, firm overview, services highlights, industries highlights, CTA
    
-   **Services Page** — Sub-menu navigation + individual service cards linking to dedicated service detail pages (9 services)
    
-   **Industries Page** — Sub-menu navigation + individual industry cards linking to dedicated industry detail pages (9 industries)
    
-   **About Us Page** — Firm history, credentials, values, and team overview
    
-   **Contact Page** — Contact form integrated with EmailJS, firm address/phone/email display
    

**Platform:** Web application — fully static, responsive, works on all devices via browser. No backend, no database, no server-side logic.

**Complexity Assessment:** Simple

-   State Management: None (static content only)
    
-   External Integrations: EmailJS (simple HTTP call from frontend contact form)
    
-   Business Logic: None — purely informational with one-way form submission
    

**MVP Success Criteria:**

-   All pages render correctly across desktop, tablet, and mobile
    
-   Navigation (including sub-menus for Services and Industries) works correctly
    
-   All 9 service cards link to their respective detail pages
    
-   All 9 industry cards link to their respective detail pages
    
-   Contact form successfully sends email via EmailJS
    
-   No backend or server required
    

* * *

## **1\. USERS & PERSONAS**

**Primary Persona:**

-   **Name:** "Tariq the Business Executive"
    
-   **Context:** A CFO or business owner researching chartered accountancy firms for tax, audit, or advisory needs. Likely referred by a colleague or found via search.
    
-   **Goals:** Quickly understand what the firm offers, confirm it serves their industry, assess credibility, and reach out to schedule a consultation.
    
-   **Pain Points:** Generic firm websites that don't clearly communicate specialization; difficulty finding the right contact channel; unclear service scope.
    

**Secondary Persona:**

-   **Name:** "Ayesha the Procurement Officer" — A government or corporate procurement professional evaluating the firm for a specific engagement (e.g., ESG compliance or audit). Needs to verify industry experience and firm credentials before initiating contact.
    

* * *

## **2\. FUNCTIONAL REQUIREMENTS**

### **2.1 Core MVP Features (Priority 0)**

**FR-001: Homepage**

-   **Description:** Landing page with hero banner, firm tagline, brief overview, highlighted services section, highlighted industries section, and a call-to-action button leading to Contact.
    
-   **Entity Type:** System Data (static content)
    
-   **Operations:** View only
    
-   **Key Rules:** Must include navigation to all primary pages; hero section must immediately communicate firm identity and professionalism.
    
-   **Acceptance:** Visitors land on the page, understand the firm's purpose, and can navigate to any section within 2 clicks.
    

**FR-002: Services Page with Sub-Menu & Detail Pages**

-   **Description:** A dedicated Services page displaying 9 service cards (Tax & Legal, Consulting, Financial Management, AI & Analytics, ESG, Audit and Assurance, Advisory, People & Workforce, Cloud). Each card is clickable and leads to a dedicated service detail page. A sub-menu in the navigation allows direct jump to any service.
    
-   **Entity Type:** System Data (static content)
    
-   **Operations:** View only — browse list, navigate via sub-menu, click through to detail page
    
-   **Key Rules:** Sub-menu must be accessible from the main navigation bar on all pages; each service detail page must have a back/breadcrumb link and a CTA to Contact.
    
-   **Acceptance:** User can navigate to any service via the sub-menu or card click and view its dedicated detail page.
    

**FR-003: Industries Page with Sub-Menu & Detail Pages**

-   **Description:** A dedicated Industries page displaying 9 industry cards (Advanced Manufacturing & Mobility, Consumer & Retail, Energy & Resources, Financial Services, Government & Infrastructure, Life Sciences & Health Care, Private Equity, Technology & Telecommunication, Media & Entertainment). Each card links to a dedicated industry detail page. A sub-menu in the navigation allows direct access to any industry.
    
-   **Entity Type:** System Data (static content)
    
-   **Operations:** View only — browse list, navigate via sub-menu, click through to detail page
    
-   **Key Rules:** Sub-menu must mirror the Services sub-menu pattern for UX consistency; each industry detail page includes relevant services the firm offers to that sector and a CTA to Contact.
    
-   **Acceptance:** User can navigate to any industry via sub-menu or card and view its dedicated detail page.
    

**FR-004: About Us Page**

-   **Description:** A page presenting the firm's history, founding story, core values, credentials, certifications, and team/leadership overview.
    
-   **Entity Type:** System Data (static content)
    
-   **Operations:** View only
    
-   **Key Rules:** Must include firm credentials and professional affiliations prominently; values section should be visually distinct (e.g., icon + text cards).
    
-   **Acceptance:** Visitor can read about the firm's background, values, and team and feel confident in the firm's credibility.
    

**FR-005: Contact Page with EmailJS Integration**

-   **Description:** A contact page with a structured form (Name, Email, Phone, Company, Subject/Service of Interest, Message) that submits directly to the firm's email via EmailJS. Page also displays firm address, phone number, and email address, and optionally an embedded map.
    
-   **Entity Type:** Communication
    
-   **Operations:** Create (submit form) + View (firm contact details)
    
-   **Key Rules:** All required fields must be validated before submission; user receives an on-screen success or error message after submission; no data is stored anywhere — email is sent directly via EmailJS API call.
    
-   **Acceptance:** User fills the form, submits, and receives a confirmation message; firm receives the email via EmailJS.
    

**FR-006: Global Navigation with Sub-Menus**

-   **Description:** A persistent top navigation bar present on all pages with dropdown sub-menus for Services (9 items) and Industries (9 items), plus direct links to About Us and Contact.
    
-   **Entity Type:** System Data
    
-   **Operations:** View + Interact (hover/click dropdowns)
    
-   **Key Rules:** Sub-menus must be accessible on both desktop (hover dropdown) and mobile (tap-to-expand accordion); active page must be visually indicated.
    
-   **Acceptance:** User can reach any page or sub-page from the navigation bar on any device.
    

* * *

## **3\. USER WORKFLOWS**

### **3.1 Primary Workflow: Prospective Client Discovers Firm and Makes Contact**

**Trigger:** Visitor lands on the homepage via search, referral link, or direct URL. **Outcome:** Visitor submits a contact inquiry and firm receives the email.

**Steps:**

1.  Visitor lands on Homepage — reads hero tagline and firm overview.
    
2.  Visitor clicks "Services" in the nav — browses the 9 service cards on the Services page.
    
3.  Visitor clicks a relevant service card (e.g., "Audit and Assurance") — reads the service detail page.
    
4.  Visitor clicks the "Get in Touch" CTA on the service detail page — navigates to Contact page.
    
5.  Visitor fills in Name, Email, Phone, Company, Subject, and Message fields.
    
6.  Visitor clicks "Send Message" — EmailJS sends the form data to the firm's email.
    
7.  Visitor sees a success confirmation message on screen.
    

### **3.2 Key Supporting Workflows**

**Browse Industries:** User clicks "Industries" in nav → views 9 industry cards → clicks relevant industry → reads industry detail page with applicable services listed → clicks CTA to Contact.

**Use Sub-Menu:** User hovers/taps "Services" or "Industries" in nav → dropdown appears with all 9 items listed → clicks directly to desired service or industry detail page.

**Learn About the Firm:** User clicks "About Us" in nav → reads firm history, values, credentials, and team overview → clicks "Contact Us" CTA at bottom of page.

**Return to Homepage:** User clicks firm logo or "Home" in nav from any page → returns to homepage.

* * *

## **4\. BUSINESS RULES**

### **4.1 Entity Lifecycle Rules**

**Static Content Pages (Homepage, Services, Industries, About Us):**

-   **Type:** System Data
    
-   **Creation:** Content is hardcoded at build time — no user creation
    
-   **Editing:** Not applicable — content updated by developer when firm requests changes
    
-   **Deletion:** Not applicable — pages are permanent site structure
    

**Service Detail Pages (9 pages):**

-   **Type:** System Data
    
-   **Creation:** Hardcoded at build time, one page per service
    
-   **Editing:** Developer-managed static content updates
    
-   **Deletion:** Not applicable — all 9 services are permanent MVP scope
    

**Industry Detail Pages (9 pages):**

-   **Type:** System Data
    
-   **Creation:** Hardcoded at build time, one page per industry
    
-   **Editing:** Developer-managed static content updates
    
-   **Deletion:** Not applicable — all 9 industries are permanent MVP scope
    

**Contact Form Submission:**

-   **Type:** Communication
    
-   **Creation:** Any site visitor can submit the form — no authentication required
    
-   **Editing:** Not applicable — once submitted, the email is sent; no record is stored on the site
    
-   **Deletion:** Not applicable — no data stored on the frontend
    

### **4.2 Data Validation Rules**

**Contact Form:**

-   **Required Fields:** Name, Email, Message
    
-   **Field Constraints:** Name minimum 2 characters; Email must be valid format ([user@domain.com](mailto:user@domain.com)); Phone is optional but if entered must be numeric with optional +/spaces; Message minimum 10 characters, maximum 1,000 characters; Subject/Service of Interest is a dropdown (optional selection)
    

**Navigation Sub-Menus:**

-   **Required Fields:** All 9 services and all 9 industries must be present and linked
    
-   **Field Constraints:** Each sub-menu item must resolve to a valid, existing page — no broken links permitted
    

### **4.3 Access & Process Rules**

-   All pages are publicly accessible — no authentication, no login, no user accounts
    
-   Contact form submissions are one-way — data is sent via EmailJS and not stored anywhere on the site
    
-   EmailJS service ID, template ID, and public key are stored as frontend environment variables or inline config — no sensitive backend credentials exposed
    
-   Form submit button is disabled during submission to prevent duplicate sends
    
-   On EmailJS failure, user sees a clear error message with an alternative contact email displayed
    

* * *

## **5\. DATA REQUIREMENTS**

### **5.1 Core Entities**

**Static Page Content**

-   **Type:** System Data | **Storage:** Hardcoded in frontend source files (HTML/JSX/component files)
    
-   **Key Fields:** pageTitle, metaDescription, heroHeading, bodyContent, ctaLabel, ctaLink
    
-   **Relationships:** Homepage references all Services and Industries; Service/Industry detail pages reference Contact page
    
-   **Lifecycle:** View only — updated by developer on request
    

**Service Entity (×9)**

-   **Type:** System Data | **Storage:** Hardcoded in frontend (static data file or component)
    
-   **Key Fields:** id, name, slug, shortDescription, fullDescription, iconOrImage, relatedIndustries
    
-   **Relationships:** Listed on Services page, referenced in Industries detail pages, linked from nav sub-menu
    
-   **Lifecycle:** View only — 9 fixed entries for MVP
    

**Industry Entity (×9)**

-   **Type:** System Data | **Storage:** Hardcoded in frontend (static data file or component)
    
-   **Key Fields:** id, name, slug, shortDescription, fullDescription, iconOrImage, relatedServices
    
-   **Relationships:** Listed on Industries page, linked from nav sub-menu, cross-references Service entities
    
-   **Lifecycle:** View only — 9 fixed entries for MVP
    

**Contact Form Submission**

-   **Type:** Communication | **Storage:** Not stored — transmitted via EmailJS API call only
    
-   **Key Fields:** senderName, senderEmail, senderPhone (optional), companyName (optional), subject (optional), message
    
-   **Relationships:** None — standalone form submission
    
-   **Lifecycle:** Create only — submitted once, delivered to firm email, no persistence
    

### **5.2 Data Storage Strategy**

-   **Primary Storage:** No storage — fully static site with zero data persistence
    
-   **Form Data:** Transmitted in-memory to EmailJS API; cleared after submission
    
-   **Capacity:** Not applicable — no storage used
    
-   **Audit Fields:** Not applicable — no stored entities
    

* * *

## **6\. INTEGRATION REQUIREMENTS**

**EmailJS:**

-   **Purpose:** Delivers contact form submissions directly to the firm's email inbox without a backend server
    
-   **Type:** Frontend-only API call using EmailJS JavaScript SDK
    
-   **Data Exchange:** Sends form fields (name, email, phone, company, subject, message) as template parameters; receives success/failure response
    
-   **Trigger:** User clicks "Send Message" on the Contact page after passing frontend validation
    
-   **Error Handling:** On failure, display inline error message "Message could not be sent. Please email us directly at \[firm email\]" — form data remains populated so user does not lose their input
    

* * *

## **7\. VIEWS & NAVIGATION**

### **7.1 Primary Views**

**Homepage** (`/`) — Hero banner with firm name and tagline, brief firm introduction paragraph, Services highlights section (cards or icons for all 9 services), Industries highlights section (cards or icons for all 9 industries), footer with contact info and quick links.

**Services Page** (`/services`) — Page heading and brief intro, grid of 9 clickable service cards each with icon, name, and short description; clicking any card navigates to that service's detail page.

**Service Detail Page** (`/services/[service-slug]`) — Full service description, key offerings or bullet points, relevant industries served, and a "Get in Touch" CTA button linking to Contact page; breadcrumb navigation back to Services.

**Industries Page** (`/industries`) — Page heading and brief intro, grid of 9 clickable industry cards each with icon, name, and short description; clicking any card navigates to that industry's detail page.

**Industry Detail Page** (`/industries/[industry-slug]`) — Full industry overview, how the firm serves this sector, list of applicable services (linked), and a "Get in Touch" CTA; breadcrumb navigation back to Industries.

**About Us Page** (`/about`) — Firm history and founding story, core values section (icon + text cards), credentials and professional affiliations, leadership/team overview section, and a CTA to Contact.

**Contact Page** (`/contact`) — Contact form (Name, Email, Phone, Company, Subject dropdown, Message), firm contact details (address, phone, email), optional embedded Google Map, EmailJS-powered submission with success/error feedback.

### **7.2 Navigation Structure**

**Main Nav:** Logo (links to `/`) | Services (dropdown with 9 items) | Industries (dropdown with 9 items) | About Us | Contact

**Dropdowns:** Services and Industries nav items reveal a full list of sub-pages on hover (desktop) or tap (mobile)

**Footer Nav:** Quick links to all main pages, firm contact details, copyright line

**Mobile:** Hamburger menu collapses all nav items; Services and Industries expand as accordions showing all sub-items

**Active State:** Current page and its parent nav item are visually highlighted

* * *

## **8\. MVP SCOPE & CONSTRAINTS**

### **8.1 MVP Success Definition**

The MVP is successful when:

-   ✅ All 7 page types render correctly (Home, Services list, 9 Service details, Industries list, 9 Industry details, About Us, Contact)
    
-   ✅ Navigation sub-menus for Services and Industries work on desktop and mobile
    
-   ✅ All 9 service cards and 9 industry cards link to correct detail pages
    
-   ✅ Contact form validates required fields and submits via EmailJS
    
-   ✅ Firm receives email upon form submission
    
-   ✅ Success and error states display correctly on Contact page
    
-   ✅ Fully responsive across mobile, tablet, and desktop
    

### **8.2 In Scope for MVP**

-   FR-001: Homepage
    
-   FR-002: Services Page + 9 Service Detail Pages
    
-   FR-003: Industries Page + 9 Industry Detail Pages
    
-   FR-004: About Us Page
    
-   FR-005: Contact Page with EmailJS
    
-   FR-006: Global Navigation with Sub-Menus
    
-   Responsive design across all breakpoints
    
-   Footer with firm info and quick links
    
-   Breadcrumb navigation on detail pages
    

### **8.3 Technical Constraints**

-   **Data Storage:** None — fully static, no localStorage, no database
    
-   **Backend:** None — zero server-side code
    
-   **External Service:** EmailJS only (frontend SDK)
    
-   **Performance:** All pages load under 2 seconds; images optimized for web
    
-   **Browser Support:** Chrome, Firefox, Safari, Edge (last 2 versions)
    
-   **Mobile:** Fully responsive, iOS and Android browser support
    
-   **Offline:** Not supported — EmailJS requires internet connection for form submission
    

### **8.4 Known Limitations**

**For MVP:**

-   Content is hardcoded — any text/copy changes require a developer code update
    
-   No CMS — firm cannot self-edit content without developer involvement
    
-   EmailJS free tier has a monthly send limit (200 emails/month) — sufficient for MVP
    
-   No form submission history or tracking on the website side
    

**Future Enhancements:**

-   CMS integration (e.g., Contentful or Sanity) for self-managed content updates
    
-   Blog or Insights section for thought leadership articles
    
-   Multi-language support (English/Urdu)
    
-   EmailJS upgrade or backend email handler for higher volume
    

* * *

## **9\. ASSUMPTIONS & DECISIONS**

### **9.1 Platform Decisions**

-   **Type:** Fully static web application — frontend only, zero backend
    
-   **Storage:** None — no data persisted on the site
    
-   **Auth:** None — fully public site, no login required
    
-   **Hosting:** Compatible with any static host (Netlify, Vercel, GitHub Pages, etc.)
    

### **9.2 Entity Lifecycle Decisions**

**All Page Content:** View only — hardcoded static content

-   **Reason:** No backend or CMS in scope; static content is sufficient for a professional firm website MVP
    

**Contact Form Submissions:** Create (transmit) only — no storage

-   **Reason:** EmailJS delivers directly to firm inbox; storing submissions would require a backend which is explicitly out of scope
    

**Navigation Structure:** Fixed — all 9 services and 9 industries hardcoded in nav

-   **Reason:** The full list of services and industries is known and fixed; dynamic nav is unnecessary complexity for a static site
    

### **9.3 Key Assumptions**

1.  **Content will be provided by the firm before development begins**
    
    -   Reasoning: Screenshots and copy for About Us, service descriptions, industry descriptions, and firm credentials were referenced but not yet provided; placeholder professional content will be used during build and replaced upon receipt
        
2.  **EmailJS public key and template will be configured by the firm or developer before launch**
    
    -   Reasoning: EmailJS requires account setup with a verified sender email; this is a one-time configuration step outside the build scope
        
3.  **All 9 services and 9 industries are equal in priority — no featured or hidden items**
    
    -   Reasoning: No hierarchy was specified; all items are presented uniformly in grids
        
4.  **The firm's brand colors and logo will be provided separately**
    
    -   Reasoning: Visual identity assets were referenced via screenshots not yet received; a professional navy/gold or dark blue/white color scheme will be used as default and updated upon brand asset receipt
        

### **9.4 Clarification Q&A Summary**

**Q:** What core services does the firm specialize in? **A:** Tax & Legal, Consulting, Financial Management, AI & Analytics, ESG, Audit and Assurance, Advisory, People & Workforce, Cloud **Decision:** 9 service cards on Services page + 9 individual detail pages + 9-item sub-menu in navigation

**Q:** Which industries does the firm serve? **A:** Advanced Manufacturing & Mobility, Consumer & Retail, Energy & Resources, Financial Services, Government & Infrastructure, Life Sciences & Health Care, Private Equity, Technology & Telecommunication, Media & Entertainment **Decision:** 9 industry cards on Industries page + 9 individual detail pages + 9-item sub-menu in navigation

**Q:** How should the contact form handle submissions on a static site? **A:** EmailJS will be used **Decision:** FR-005 specifies EmailJS SDK integration — frontend-only, no backend required, form data transmitted directly to firm email

**Q:** About Us content and visual theme? **A:** Screenshots to be provided separately **Decision:** PRD defines the structural requirements (history, values, credentials, team sections); placeholder content and a professional default color scheme will be used until brand assets are received

* * *

**PRD Complete - Ready for Development**
