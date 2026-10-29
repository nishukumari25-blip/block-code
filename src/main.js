// const ASSETS = "/assets/";
// const LOGO = `${ASSETS}blackcode_logo-7QPW17i3.png`;
// const WHITE_LOGO = `${ASSETS}blackcode_white-Ca6hyRi_.png`;
// const SUITE_URL = "https://app.blackcode.in/";
// const WHATSAPP_URL =
//   "https://wa.me/918527952043?text=Hello%20BlackCode%2C%20I%20would%20like%20to%20discuss%20my%20project.";

// const services = [
//   {
//     slug: "custom-web-development",
//     tag: "WEB",
//     name: "Custom Web Development",
//     card: "Professional, conversion-focused websites that make your brand easy to trust and contact.",
//     hero: "Websites that explain your value clearly and turn visitors into enquiries.",
//     deliverTitle: "A website built around your business goals.",
//     deliverIntro:
//       "We plan, design and develop responsive websites around the questions your customers ask, the trust they need and the action you want them to take.",
//     deliver: [
//       "Website strategy, sitemap and page planning",
//       "Responsive design for every screen size",
//       "Lead forms, CRM connections and analytics",
//       "Technical SEO, speed and launch support",
//     ],
//     whyTitle: "Turn a first visit into a confident enquiry.",
//     why:
//       "A business website has only a few moments to make its purpose clear. Page structure, proof, performance and contact paths work together to help visitors find the right answer and take the next step.",
//     benefits: [
//       "A stronger digital first impression",
//       "Clearer paths to calls, forms and enquiries",
//     ],
//     steps: [
//       "Map your audience and conversion journey.",
//       "Design a credible interface and page hierarchy.",
//       "Build, test and launch with tracking.",
//     ],
//     focus: "A responsive website that earns trust and supports lead generation.",
//     workflow: "website",
//     practices: [
//       ["Shape the website story", "We organise your services, proof and calls to action around the questions customers ask before contacting you."],
//       ["Review real customer journeys", "We validate important pages, mobile layouts and form paths before the site goes live."],
//       ["Improve with live data", "Analytics shows where visitors engage, leave and convert, guiding future content improvements."],
//     ],
//     images: ["web-development-hero-B8KaRdlw.jpg", "web-development-process-real-D7-DQzaa.jpg"],
//     implementationAlt: "Custom Web Development implementation",
//   },
//   {
//     slug: "ecommerce-product-platforms",
//     tag: "SHOP",
//     name: "E-commerce & Product Platforms",
//     card: "Easy-to-manage product experiences designed for discovery, checkout and repeat sales.",
//     hero: "Digital storefronts that make product discovery and checkout simple.",
//     deliverTitle: "Commerce experiences built to sell and scale.",
//     deliverIntro:
//       "We connect the customer-facing shop with product data, payments, orders and fulfilment, making the platform easier for customers to use and teams to operate.",
//     deliver: [
//       "Catalogues, collections, filters and search",
//       "Cart, secure payments and mobile checkout",
//       "Order, inventory and fulfilment integrations",
//       "Customer accounts and conversion tracking",
//     ],
//     whyTitle: "Make buying easier from first browse to fulfilment.",
//     why:
//       "A smooth commerce experience brings product discovery, checkout and operations together. Every step should be clear for customers and manageable for the team behind the store.",
//     benefits: [
//       "A simpler path from product discovery to purchase",
//       "Connected order and inventory workflows",
//     ],
//     steps: [
//       "Plan the catalogue and buying journey.",
//       "Connect checkout, payments and operations.",
//       "Test the experience and prepare launch.",
//     ],
//     focus: "A product platform designed to make buying and fulfilment straightforward.",
//     workflow: "e-commerce",
//     practices: [
//       ["Organise product information", "Clear categories, product details and filters help customers find what they need."],
//       ["Test the checkout journey", "We review the complete purchase flow across screens, payment states and customer scenarios."],
//       ["Support operational handoff", "Orders, stock and fulfilment information stay connected to the teams handling them."],
//     ],
//     images: ["ecommerce-hero-real-D1DXJTYF.jpg", "ecommerce-process-real-BQQq-SoK.jpg"],
//     implementationAlt: "E-commerce & Product Platforms implementation",
//   },
//   {
//     slug: "mobile-applications",
//     tag: "APP",
//     name: "Mobile Applications",
//     card: "Practical mobile products for customers, operations teams and field staff.",
//     hero: "Mobile products that simplify important customer and workforce tasks.",
//     deliverTitle: "Apps designed for real-world use.",
//     deliverIntro:
//       "We build focused mobile experiences for customers, staff and field teams, supported by secure APIs and a release plan that puts the right workflows first.",
//     deliver: [
//       "MVP discovery and user-flow planning",
//       "Customer, staff and field-team journeys",
//       "Secure APIs and notifications",
//       "Device testing and release preparation",
//     ],
//     whyTitle: "Put important tasks in users' hands.",
//     why:
//       "A mobile app needs to work in short, interrupted moments—not just look good in a demo. We focus on essential actions, clear feedback and reliable connections to the systems behind the app.",
//     benefits: [
//       "Faster completion of high-value tasks",
//       "A practical experience for users on the move",
//     ],
//     steps: [
//       "Define the highest-value mobile tasks.",
//       "Design screens for fast, simple use.",
//       "Integrate, test and prepare release.",
//     ],
//     focus: "Mobile journeys that are focused, intuitive and reliable in real use.",
//     workflow: "mobile app",
//     practices: [
//       ["Prioritise the first release", "We identify the smallest set of app workflows that creates meaningful value for users."],
//       ["Prototype key screens", "Early interface reviews make navigation, language and actions easier to refine."],
//       ["Test real device conditions", "We check important flows on the phones, networks and scenarios your users encounter."],
//     ],
//     images: ["mobile-hero-real-R31wIm3b.jpg", "mobile-process-real-C1r-yBCX.jpg"],
//     implementationAlt: "Mobile Application Development implementation",
//   },
//   {
//     slug: "saas-application-development",
//     tag: "SAAS",
//     name: "SaaS Application Development",
//     card: "Subscription products with multi-tenant architecture, permissions and room to grow.",
//     hero: "Subscription products with secure accounts, roles and room to grow.",
//     deliverTitle: "Launch a focused SaaS product with confidence.",
//     deliverIntro:
//       "We help shape a valuable first release while building the foundations for tenants, permissions, administration and future subscription plans.",
//     deliver: [
//       "MVP scope and workflow planning",
//       "Multi-tenant accounts and user roles",
//       "Subscription-ready foundations and admin tools",
//       "Dashboards, reporting and scalable APIs",
//     ],
//     whyTitle: "Build a product customers can adopt and grow with.",
//     why:
//       "SaaS delivery requires product thinking as well as software engineering. Account structure, permissions, onboarding and administration need to feel coherent from the first customer through future growth.",
//     benefits: [
//       "A focused MVP with clear customer value",
//       "Foundations for plans, roles and future releases",
//     ],
//     steps: [
//       "Validate the product proposition.",
//       "Build secure product foundations.",
//       "Prepare the platform for growth.",
//     ],
//     focus: "A subscription product designed to validate demand without blocking future scale.",
//     workflow: "SaaS",
//     practices: [
//       ["Define the customer workflow", "We turn the problem your product solves into a coherent first-use and repeat-use experience."],
//       ["Plan tenant and role behaviour", "We clarify what each customer, user and administrator can see or manage."],
//       ["Learn from early adoption", "Feedback and product usage guide the most valuable changes after launch."],
//     ],
//     images: ["saas-hero-real-MchCnzxE.jpg", "saas-process-real-BWLcuv8O.jpg"],
//     implementationAlt: "SaaS Application Development implementation",
//   },
//   {
//     slug: "custom-erp-solutions",
//     tag: "ERP",
//     name: "Custom ERP Solutions",
//     card: "Connected operational systems built around purchasing, inventory, finance and reporting.",
//     hero: "Connected operational software for purchasing, inventory and reporting.",
//     deliverTitle: "Bring essential business operations into one system.",
//     deliverIntro:
//       "We build ERP software around your actual workflows, removing duplicate work and giving teams clearer ownership, approvals and decision-ready information.",
//     deliver: [
//       "Purchasing, inventory and supplier workflows",
//       "Approvals, task ownership and audit history",
//       "Role-based access and dashboards",
//       "Custom management and finance reports",
//     ],
//     whyTitle: "Replace fragmented operations with a connected view.",
//     why:
//       "ERP projects succeed when they reflect the real movement of work, stock, approvals and information. We focus on removing bottlenecks and giving decision-makers useful operational visibility.",
//     benefits: [
//       "Less duplicate data entry across teams",
//       "More reliable operational control and reporting",
//     ],
//     steps: [
//       "Map your current operating processes.",
//       "Build the essential modules.",
//       "Deliver actionable reporting.",
//     ],
//     focus: "Connected workflows that make daily operations easier to manage.",
//     workflow: "ERP",
//     practices: [
//       ["Map work before software", "We document the handoffs, exceptions and approvals that shape your actual process."],
//       ["Introduce modules in priority order", "The most valuable workflows can be delivered first without overwhelming the team."],
//       ["Use reports to improve operations", "Dashboards highlight status, exceptions and trends that deserve attention."],
//     ],
//     images: ["erp-hero-real-DmgDLOny.jpg", "erp-process-real-B-GlnTQS.jpg"],
//     implementationAlt: "Custom ERP Solutions implementation",
//   },
//   {
//     slug: "crm-systems",
//     tag: "CRM",
//     name: "CRM Systems",
//     card: "Lead, customer and follow-up systems that give sales teams a clear next action.",
//     hero: "Lead and follow-up systems that give sales teams a clear next action.",
//     deliverTitle: "A CRM shaped around how your team sells.",
//     deliverIntro:
//       "We build custom CRM workflows around your lead sources, sales stages and responsibilities, giving every opportunity a complete history and clear ownership.",
//     deliver: [
//       "Lead capture, assignment and sales stages",
//       "Customer records and activity history",
//       "Follow-up reminders, tasks and quotations",
//       "Sales dashboards, permissions and reports",
//     ],
//     whyTitle: "Give every opportunity a clear next action.",
//     why:
//       "Sales momentum drops when leads, notes and follow-ups sit in different places. A tailored CRM keeps context with the opportunity and helps managers understand the health of the pipeline.",
//     benefits: [
//       "More consistent follow-up from the sales team",
//       "A complete and searchable customer history",
//     ],
//     steps: [
//       "Define your real sales process.",
//       "Centralise customer activity.",
//       "Improve pipeline visibility.",
//     ],
//     focus: "A sales workspace that reduces guesswork and improves pipeline discipline.",
//     workflow: "CRM",
//     practices: [
//       ["Reflect your sales stages", "We shape fields, statuses and ownership around the process your team already follows."],
//       ["Keep the next action visible", "Tasks, reminders and notes are designed to help reps move opportunities forward."],
//       ["Review pipeline quality", "Reports reveal lead sources, stage movement and follow-up gaps that need attention."],
//     ],
//     images: ["crm-hero-real-D03mAlAd.jpg", "crm-process-real-BiSjZ-dc.jpg"],
//     implementationAlt: "Custom CRM Systems implementation",
//   },
//   {
//     slug: "custom-hrms",
//     tag: "HR",
//     name: "Custom HRMS",
//     card: "Clear people operations for employee records, attendance, leave and payroll inputs.",
//     hero: "Clear people operations for employee records, attendance and leave.",
//     deliverTitle: "Make everyday HR administration simpler.",
//     deliverIntro:
//       "We create HRMS systems around your policies and approval paths, so employees can self-serve while HR keeps accurate records and control.",
//     deliver: [
//       "Employee profiles, documents and onboarding",
//       "Attendance, leave and approval workflows",
//       "Employee self-service and permissions",
//       "Payroll inputs and HR reporting",
//     ],
//     whyTitle: "Make people operations clearer for employees and HR.",
//     why:
//       "Employee records, leave and attendance work best when everyone has one reliable place to act. A tailored HRMS reduces routine coordination while keeping approvals and information controlled.",
//     benefits: [
//       "Less manual work for routine HR requests",
//       "More accurate employee, leave and attendance records",
//     ],
//     steps: [
//       "Review people processes and policies.",
//       "Build self-service workflows.",
//       "Support accurate HR administration.",
//     ],
//     focus: "Practical HR workflows that balance self-service with policy control.",
//     workflow: "HRMS",
//     practices: [
//       ["Translate policy into workflows", "We map leave, attendance and approval rules before building the employee experience."],
//       ["Design employee self-service", "Employees can access the right records and requests without exposing sensitive HR information."],
//       ["Maintain record quality", "Clear permissions and reporting help HR keep information current and auditable."],
//     ],
//     images: ["hrms-hero-real-C8-Xk4oW.jpg", "hrms-process-real-C2EwMc8n.jpg"],
//     implementationAlt: "Custom HRMS Software implementation",
//   },
//   {
//     slug: "digital-marketing-seo",
//     tag: "GROW",
//     name: "Digital Marketing & SEO",
//     card: "Campaign-ready landing pages and search foundations built for qualified traffic.",
//     hero: "Search and campaign foundations that bring more qualified visitors.",
//     deliverTitle: "Visibility connected to measurable business results.",
//     deliverIntro:
//       "We improve the pages, search foundations and tracking needed to understand which activity brings relevant visitors and enquiries—not just traffic.",
//     deliver: [
//       "Technical SEO reviews and priority fixes",
//       "Search-intent and content direction",
//       "Campaign landing pages and conversion improvements",
//       "Analytics, events and performance reporting",
//     ],
//     whyTitle: "Connect visibility with qualified business demand.",
//     why:
//       "Traffic is only valuable when it reaches the right audience and gives them a clear reason to act. SEO, landing pages and measurement need to work as one connected acquisition journey.",
//     benefits: [
//       "Better alignment between search intent and page content",
//       "Clearer evidence of which activity creates enquiries",
//     ],
//     steps: [
//       "Identify high-value search opportunities.",
//       "Strengthen pages and conversion tracking.",
//       "Use results to guide the next improvement.",
//     ],
//     focus: "A search and campaign foundation built around qualified demand.",
//     workflow: "SEO",
//     practices: [
//       ["Understand search intent", "We identify what prospective customers are looking for and the content needed to meet that need."],
//       ["Improve conversion paths", "Landing pages and calls to action are refined to make the next step obvious."],
//       ["Measure meaningful activity", "Tracking focuses on enquiries, calls and the signals that help evaluate marketing performance."],
//     ],
//     images: ["seo-hero-real-B4LG3Be0.jpg", "seo-process-real-VoR7I0vf.jpg"],
//     implementationAlt: "Digital Marketing & SEO implementation",
//   },
//   {
//     slug: "performance-security",
//     tag: "FAST",
//     name: "Performance & Security",
//     card: "Improve stability, speed and security before small technical issues become business risks.",
//     hero: "Practical improvements for faster, safer and more dependable digital products.",
//     deliverTitle: "Protect confidence in your website or application.",
//     deliverIntro:
//       "We review speed, stability and security together, then focus on the technical improvements that reduce avoidable risk and create a better user experience.",
//     deliver: [
//       "Page speed and application performance reviews",
//       "Security hardening and access controls",
//       "Reliability, backup and deployment checks",
//       "Monitoring and technical health guidance",
//     ],
//     whyTitle: "Protect the experience customers and teams depend on.",
//     why:
//       "Speed, reliability and security are connected business concerns. A slow, unstable or poorly protected product can affect trust long before a major incident occurs.",
//     benefits: [
//       "A faster and more dependable user experience",
//       "Reduced exposure to avoidable technical risk",
//     ],
//     steps: [
//       "Assess performance, stability and risk.",
//       "Implement the priority improvements.",
//       "Establish ongoing health checks.",
//     ],
//     focus: "Prioritised technical improvements that strengthen confidence and reliability.",
//     workflow: "performance and security",
//     practices: [
//       ["Identify the highest-impact risks", "We review performance bottlenecks, access practices and reliability weaknesses in context."],
//       ["Fix and verify improvements", "Changes are tested against the behaviour and environments that matter to your users."],
//       ["Establish healthy habits", "Monitoring and release checks help preserve performance and security over time."],
//     ],
//     images: ["security-hero-real-BshukN3H.jpg", "security-process-real-BWvJDg-1.jpg"],
//     implementationAlt: "Performance & Security implementation",
//   },
//   {
//     slug: "maintenance-long-term-support",
//     tag: "CARE",
//     name: "Maintenance & Long-Term Support",
//     card: "Keep your digital product healthy with structured improvements and dependable support.",
//     hero: "Structured support that keeps your website or software useful after launch.",
//     deliverTitle: "A dependable rhythm for product care and improvement.",
//     deliverIntro:
//       "We manage fixes, updates, performance checks and planned enhancements through a clear support process so your product stays secure, reliable and aligned with the business.",
//     deliver: [
//       "Routine updates, backups and health checks",
//       "Issue investigation and release support",
//       "Performance and security maintenance",
//       "Feature enhancements and product planning",
//     ],
//     whyTitle: "Keep your product useful after the initial launch.",
//     why:
//       "Websites and software change with the business using them. A visible support process keeps small issues from becoming urgent and makes room for practical, planned improvements.",
//     benefits: [
//       "A predictable process for fixes and updates",
//       "A product that stays aligned with changing needs",
//     ],
//     steps: [
//       "Set a clear support and priority rhythm.",
//       "Maintain the product proactively.",
//       "Plan the most useful enhancements.",
//     ],
//     focus: "Ongoing care that keeps software stable, current and useful.",
//     workflow: "support",
//     practices: [
//       ["Agree how support works", "We establish clear priorities, communication and ownership for support requests."],
//       ["Maintain proactively", "Updates, checks and small fixes are addressed before avoidable disruption builds up."],
//       ["Plan future improvements", "Regular reviews turn feedback and business priorities into a manageable enhancement roadmap."],
//     ],
//     images: ["support-hero-real-DCp12NS_.jpg", "support-process-real-DehHtF1p.jpg"],
//     implementationAlt: "Maintenance & Long-Term Support implementation",
//   },
// ];

// const routeFor = (slug) => `/services/${slug}`;
// const projectTypes = [
//   "Website",
//   "Mobile app",
//   "CRM",
//   "HRMS / HRM",
//   "ERP",
//   "E-commerce platform",
//   "Custom software",
//   "Other / not sure",
// ];

// function icon(name, className = "") {
//   const paths = {
//     arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
//     check: '<path d="m5 12 4 4L19 6"/><circle cx="12" cy="12" r="10"/>',
//     spark: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z"/>',
//     globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
//     cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
//     phone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
//     layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
//     box: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9"/>',
//     users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
//     trending: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
//     shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
//     wrench: '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L2 19l3 3 6.3-6.3a5 5 0 0 0 6.4-6.4L14 13l-3-3 3.7-3.7Z"/>',
//     pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
//     mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
//     clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
//     heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
//     menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
//     close: '<path d="m6 6 12 12M18 6 6 18"/>',
//     briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>',
//   };
//   return `<svg class="icon ${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.spark}</svg>`;
// }

// function header() {
//   return `<header class="site-header">
//     <a class="brand" href="/" aria-label="BlackCode home"><img src="${LOGO}" alt="BlackCode"></a>
//     <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">${icon("menu")}</button>
//     <nav class="main-nav" aria-label="Main navigation">
//       <a href="/">Home</a>
//       <a href="/about">About Us</a>
//       <div class="services-menu">
//         <button class="services-toggle" type="button" aria-expanded="false">Services <span class="chevron"></span></button>
//         <div class="services-dropdown">
//           <div><h4>Digital Products</h4>${services.slice(0, 3).map((service) => `<a href="${routeFor(service.slug)}">${service.name}</a>`).join("")}</div>
//           <div><h4>Business Systems</h4>${services.slice(3, 7).map((service) => `<a href="${routeFor(service.slug)}">${service.name}</a>`).join("")}</div>
//           <div><h4>Growth &amp; Support</h4>${services.slice(7).map((service) => `<a href="${routeFor(service.slug)}">${service.name}</a>`).join("")}</div>
//         </div>
//       </div>
//       <a href="${SUITE_URL}" target="_blank" rel="noreferrer">Suite</a>
//       <a href="/careers">Careers</a>
//       <a href="/contact">Contact Us</a>
//     </nav>
//   </header>`;
// }

// function footer() {
//   return `<footer class="site-footer">
//     <div class="footer-grid">
//       <div class="footer-brand">
//         <a href="/" aria-label="BlackCode home"><img src="${WHITE_LOGO}" alt="BlackCode"></a>
//         <p>BlackCode delivers web applications, e-commerce platforms, mobile apps and business software for modern teams.</p>
//         <div class="social-links" aria-label="BlackCode social media">
//           <a aria-label="BlackCode on Facebook" href="https://www.facebook.com" target="_blank" rel="noreferrer">f</a>
//           <a aria-label="BlackCode on X" href="https://x.com" target="_blank" rel="noreferrer">𝕏</a>
//           <a aria-label="BlackCode on LinkedIn" href="https://www.linkedin.com/in/blackcode-t-97a8103aa" target="_blank" rel="noreferrer">in</a>
//           <a aria-label="BlackCode on Instagram" href="https://www.instagram.com/blackcode_technology" target="_blank" rel="noreferrer">◎</a>
//         </div>
//       </div>
//       <nav class="footer-links" aria-label="Company links"><h4>Company</h4><a href="/">Home</a><a href="/about">About Us</a><a href="${SUITE_URL}" target="_blank" rel="noreferrer">Suite</a><a href="/careers">Careers</a><a href="/contact">Contact</a></nav>
//       <nav class="footer-links" aria-label="Service links"><h4>Services</h4>${services.slice(0, 5).map((service) => `<a href="${routeFor(service.slug)}">${service.name === "E-commerce & Product Platforms" ? "E-commerce Platforms" : service.name}</a>`).join("")}</nav>
//       <div class="footer-contact"><h4>Contact Us</h4><p>${icon("pin")}<span>A-70 Second Floor, Sector-2 Noida, Gautam Buddha Nagar, U.P. 201301.</span></p><a href="tel:+917965315313">${icon("phone")}<span>+91 7965315313</span></a><a href="mailto:info@blackcode.in">${icon("mail")}<span>info@blackcode.in</span></a></div>
//     </div>
//     <div class="footer-bottom">© 2026 BlackCode. All rights reserved.</div>
//   </footer>
//   <a class="whatsapp" href="${WHATSAPP_URL}" aria-label="Chat with BlackCode on WhatsApp" target="_blank" rel="noreferrer"><svg class="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2a12.4 12.4 0 0 0-10.6 18.8L4 28l6.2-1.3A12.4 12.4 0 1 0 16 3.2Zm0 22.2c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.7.8.8-3.6-.3-.5a9.2 9.2 0 1 1 8.9 5Zm5.1-6.9c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.4.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-1-2.1-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.7 1.1 2.9c.2.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.4Z"/></svg><span>Chat with us</span></a>`;
// }

// function leadForm(className = "") {
//   return `<form class="lead-form ${className}" data-form="enquiry">
//     <label>
//       Full name
//       <input
//         name="fullname"
//         type="text"
//         placeholder="Your name"
//         autocomplete="name"
//         required
//       >
//     </label>

//     <label>
//       Email address
//       <input
//         name="email"
//         type="email"
//         placeholder="you@company.com"
//         autocomplete="email"
//         required
//       >
//     </label>

//     <label>
//       Phone number
//       <input
//         name="phone"
//         type="tel"
//         placeholder="10-digit mobile number"
//         autocomplete="tel"
//         inputmode="numeric"
//         maxlength="10"
//         pattern="[6-9][0-9]{9}"
//         title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9"
//         required
//       >
//     </label>

//     <label>
//       City or location
//       <input
//         name="location"
//         type="text"
//         placeholder="City / location"
//         autocomplete="address-level2"
//       >
//     </label>

//     <label>
//       Project interest
//       <select name="projectType" required>
//         <option value="" disabled selected>Choose a project type</option>
//         ${projectTypes.map((type) => `<option>${type}</option>`).join("")}
//       </select>
//     </label>

//     <label class="full-field">
//       Project requirement
//       <textarea
//         name="description"
//         maxlength="1000"
//         placeholder="Tell us what you want to build"
//         required
//       ></textarea>
//     </label>

//     <button class="button button-primary" type="submit">
//       Send enquiry ${icon("arrow")}
//     </button>

//     <p class="form-status" aria-live="polite"></p>
//   </form>`;
// }

// function homePage() {
//   return `<main>
//     <section class="home-hero">
//       <div class="hero-content">
//         <p class="eyebrow">Build what your business needs next</p>
//         <h1>From your first website to the systems behind your growth.</h1>
//         <p class="hero-copy">BlackCode designs, develops and supports digital products that help businesses sell, operate and scale with clarity.</p>
//         <div class="hero-actions"><a class="button button-primary" href="/contact">Start a project ${icon("arrow")}</a><a class="button button-outline" href="#what-we-do">Explore what we do</a></div>
//         <div class="hero-promises"><span>${icon("check")}Business-first scope</span><span>${icon("check")}Clear milestones</span><span>${icon("check")}Support that continues</span></div>
//       </div>
//       <div class="hero-visual" aria-label="BlackCode digital services">
//         <div class="visual-label">BLACKCODE / BUILD</div>
//         <div class="visual-title"><span>Websites</span><span>E-Commerce</span><em>SaaS products</em></div>
//         <div class="visual-pills"><span>CRM</span><span>HRMS</span><span>ERP</span><span>AI</span></div>
//         <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div>
//       </div>
//     </section>
//     <section class="services-section section-wrap" id="what-we-do">
//       <div class="section-heading"><div><p class="section-kicker">WHAT WE DO</p><h2>The digital work your business cannot afford to get wrong.</h2></div><p>Choose one focused service or connect several into one complete operating system.</p></div>
//       <div class="service-grid">${services.map((service, index) => `<a class="service-card" href="${routeFor(service.slug)}"><div class="service-card-top"><span class="service-icon">${icon(["globe", "cart", "phone", "layers", "box", "users", "users", "trending", "shield", "wrench"][index])}</span><span class="service-tag">${service.tag}</span></div><h3>${service.name}</h3><p>${service.card}</p><span class="discover">Discover ${icon("arrow")}</span></a>`).join("")}</div>
//     </section>
//     <section class="counters" aria-label="BlackCode at a glance"><div><strong>10</strong><span>Specialised Services</span></div><div><strong>01</strong><span>Connected BlackCode Suite</span></div><div><strong>100%</strong><span>Custom-Built Solutions</span></div><div><strong>∞</strong><span>Room For Your Next Stage</span></div></section>
//     <section class="suite-section section-wrap"><div class="suite-copy"><p class="section-kicker">BLACKCODE SUITE</p><h2>One platform. The modules your team needs today.</h2><p>CRM, ERP, HRMS, Inventory, Billing, Payroll, Projects, Help Desk and AI—activated as your business grows.</p><a class="button button-primary" href="${SUITE_URL}" target="_blank" rel="noreferrer">Explore Suite plans ${icon("arrow")}</a></div><div class="suite-art"><div class="suite-window"><span>BLACKCODE / SUITE</span><div class="suite-logo">BC<span>+</span></div><strong>Start with CRM</strong><p>Build a connected business suite, one useful module at a time.</p><div class="suite-modules"><i>CRM</i><i>ERP</i><i>HRMS</i><i>AI</i></div></div></div></section>
//     <section class="process-section section-wrap"><div class="section-heading"><div><p class="section-kicker">HOW WE WORK</p><h2>Focused delivery, without unnecessary complexity.</h2></div></div><div class="process-grid"><article>${icon("spark")}<span>01</span><h3>Discover</h3><p>Align on goals, users and the right first release.</p></article><article>${icon("layers")}<span>02</span><h3>Design</h3><p>Turn ideas into a clear product and delivery plan.</p></article><article>${icon("check")}<span>03</span><h3>Build &amp; support</h3><p>Create, launch and improve with confidence.</p></article></div></section>
//     <section class="home-cta"><div class="cta-copy"><p class="section-kicker">Have a project in mind?</p><h2>Let's make it useful, fast and built to last.</h2></div>${leadForm("home-lead-form")}</section>
//   </main>`;
// }

// function aboutPage() {
//   return `<main class="inner-page about-page">
//     <section class="page-hero"><p class="section-kicker">ABOUT BLACKCODE</p><h1>More Than Code. A Thoughtful Technology Company.</h1><p>BlackCode was created with a simple belief — software should solve real problems, not create new ones.</p></section>
//     <section class="story-section section-wrap"><div class="story-copy"><p class="section-kicker">PURPOSEFUL TECHNOLOGY</p><h2>Our Story</h2><p>BlackCode started with a simple goal: build meaningful digital systems that make everyday work clearer, easier, and more connected. We approach each challenge with structure and a focus on the people who will use the product.</p><p>Today, we bring that same care to business software, websites, and custom applications. We value dependable architecture, thoughtful user experiences, and solutions that can grow with the business behind them.</p><div class="story-tags"><span>Built around real workflows</span><span>Designed to grow with you</span></div></div><figure><img src="${ASSETS}about-team-BL3NAJQc.jpg" alt="A collaborative software team working together around a laptop"><figcaption><span>Good technology starts with understanding people.</span><span>Thoughtful work. Practical outcomes.</span></figcaption></figure></section>
//     <section class="thinking-section section-wrap"><h2>How We Think</h2><div class="thinking-grid">${[["Clarity Before Complexity", "We believe simple systems outperform complex ones in the long run."], ["Architecture Matters", "A strong foundation ensures performance, security, and scalability."], ["Business Context First", "Technology decisions should support real-world workflows."], ["Sustainability Over Speed", "We value long-term stability over short-term delivery pressure."]].map(([title, text]) => `<article>${icon("spark")}<h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
//     <section class="about-callout"><h2>Let’s Build Something Great Together</h2><p>Have an idea for a website, ERP, or SaaS product? Let BlackCode bring it to life.</p><a class="button button-primary" href="/contact">Start Your Project ${icon("arrow")}</a></section>
//     <section class="values-row section-wrap"><article><h2>Our Culture</h2><p>We operate with a mindset of ownership, accountability, and respect for craftsmanship. Every engineer at BlackCode treats projects as long-term products, not temporary assignments.</p><p>We encourage continuous learning, thoughtful decision-making, and open communication. Our culture prioritizes calm execution, realistic timelines, and honest feedback — both internally and with clients.</p></article><article><h2>Building Trust Through Process</h2><p>Trust is built through consistency. We focus on clear documentation, predictable delivery, and transparent communication throughout every engagement.</p><p>Our clients value us not only for technical skill, but for our ability to think ahead, anticipate challenges, and design systems that grow gracefully with their business.</p></article></section>
//     <section class="partnership-section section-wrap"><p class="section-kicker">WORKING WITH BLACKCODE</p><h2>Good Work Starts With a Clear Partnership</h2><p>From the first conversation through launch and beyond, we keep the work focused on your goals and the people who rely on your systems.</p><div class="partnership-grid">${[["01", "Understand the need", "We begin by learning your workflows, priorities, and what success should look like."], ["02", "Build with clarity", "We shape a practical solution with clear decisions, regular feedback, and careful execution."], ["03", "Support what comes next", "We plan for the next stage too, so your product can adapt as your business changes."]].map(([n, title, text]) => `<article><span>${n}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
//   </main>`;
// }

// function contactPage() {
//   return `<main class="inner-page contact-page">
//     <section class="contact-hero"><div><p class="section-kicker">LET’S TALK ABOUT YOUR PROJECT</p><h1>Good work starts<br>with a conversation.</h1><p>Tell us what you’re planning. Our team will help you map the right solution, scope, and next steps.</p><div class="contact-points"><span>${icon("check")}Replies within one business day</span><span>${icon("check")}Web, mobile &amp; business software</span></div></div><div class="contact-hero-mark"><span>BC</span><small>CONTACT DETAILS</small><i></i></div></section>
//     <section class="contact-layout section-wrap"><div class="contact-info"><p class="section-kicker">CONTACT DETAILS</p><h2>We’re here to help.</h2><p>Have a project in mind or need a little direction? Reach out and we’ll connect you with the right team.</p><div class="contact-detail"><span class="detail-icon">${icon("pin")}</span><div><small>VISIT OUR OFFICE</small><p>A-70, Second Floor, Sector 2,<br>Noida, Uttar Pradesh 201301</p></div></div><div class="contact-detail"><span class="detail-icon">${icon("phone")}</span><div><small>CALL OUR TEAM</small><a href="tel:+917965315313">+91 79653 15313</a></div></div><div class="contact-detail"><span class="detail-icon">${icon("mail")}</span><div><small>EMAIL US</small><a href="mailto:info@blackcode.in">info@blackcode.in</a></div></div><div class="contact-detail"><span class="detail-icon">${icon("clock")}</span><div><small>OFFICE HOURS</small><p>Mon–Fri, 9:00 AM–6:00 PM<br>Saturday, 10:00 AM–3:00 PM · Sunday closed</p></div></div><div class="connect-links"><span>Connect with us</span><a href="https://www.linkedin.com/in/blackcode-t-97a8103aa" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/blackcode_technology" target="_blank" rel="noreferrer">Instagram</a></div></div>
//       <div class="contact-form-panel"><p class="section-kicker">PROJECT INQUIRY</p><h2>Tell us what you need</h2><p>Share a few details and we’ll take it from here.</p>${leadForm("contact-lead-form")}<p class="privacy-note">Your details are only used to respond to your inquiry.</p></div></section>
//     <section class="faq-section section-wrap"><div><p class="section-kicker">A FEW QUICK ANSWERS</p><h2>Before we connect</h2></div><div class="faq-list">${[["How soon will you get back to me?", "Our team usually responds within one business day."], ["Can you help define the scope?", "Yes. We’ll discuss your goals and recommend a practical approach."], ["Do you support projects after launch?", "We offer ongoing maintenance and support for delivered projects."]].map(([q, a], index) => `<details ${index === 0 ? "open" : ""}><summary>${q}<span>+</span></summary><p>${a}</p></details>`).join("")}</div></section>
//     <section class="map-section section-wrap"><div class="map-copy"><p class="section-kicker">FIND US</p><h2>Visit our Noida office</h2><p>A-70, Second Floor, Sector 2,<br>Noida, Uttar Pradesh 201301</p><a href="https://maps.google.com/maps?q=A-70%20Second%20Floor%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301" target="_blank" rel="noreferrer">Open in Maps ${icon("arrow")}</a></div><iframe title="Map to BlackCode's Noida office" loading="lazy" src="https://maps.google.com/maps?q=A-70%20Second%20Floor%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301&output=embed"></iframe></section>
//   </main>`;
// }

// function careersPage() {
//   return `<main class="inner-page careers-page">
//     <section class="page-hero career-hero"><p class="section-kicker">CAREERS AT BLACKCODE</p><h1>Careers at BlackCode</h1><p>We are always looking for talented individuals to join our team and grow together.</p></section>
//     <section class="why-join section-wrap"><h2>Why Join Us</h2><div class="career-benefits">${[["Room to grow", "Build your skills in a supportive, growth-focused environment.", "trending"], ["Meaningful work", "Contribute to useful products and projects across industries.", "heart"], ["Teamwork that matters", "Share ideas and solve problems with a collaborative team.", "users"], ["Keep learning", "Take on new challenges and keep developing your craft.", "spark"]].map(([title, text, iconName]) => `<article>${icon(iconName)}<h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
//     <section class="application-section section-wrap"><div><p class="section-kicker">JOIN OUR TEAM</p><h2>Apply for a Position</h2><p>Tell us a little about yourself and the role you’re looking for. Our team will review your application and get back to you.</p></div><form class="application-form" data-form="career"><div class="form-grid">${[
//       ["Full Name", "fullname", "text", true],
//       ["Email Address", "email", "email", true],
//       ["Mobile Number", "phone", "tel", true],
//       ["Current Location", "location", "text", true],
//       ["Highest Qualification", "qualification", "text", true],
//       ["Position Applying For", "position", "text", true],
//       ["Total Experience", "experience", "text", true],
//       ["Expected Salary", "expSalary", "text", false],
//     ].map(([label, name, type, required]) => `<label>${label}<input name="${name}" type="${type}" placeholder="${label}" ${required ? "required" : ""}></label>`).join("")}<label class="full-field">Brief Introduction or Career Summary<textarea name="summary" placeholder="Brief Introduction or Career Summary"></textarea></label></div><label class="upload-box">${icon("briefcase")}<span><strong>Attach your CV or resume</strong><small>PDF, DOC or DOCX · Maximum file size 10 MB</small><span class="file-name">No file chosen</span></span><span class="button button-outline">Browse files</span><input class="file-input" type="file" name="resume" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"></label><button class="button button-primary" type="submit">Submit Application ${icon("arrow")}</button><p class="form-status" aria-live="polite"></p></form></section>
//   </main>`;
// }

// function servicePage(service) {
//   const iconNames = ["users", "trending", "shield", "check"];
//   return `<main class="inner-page service-page">
//     <section class="service-hero">
//       <div class="service-hero-copy"><p class="section-kicker">BLACKCODE SERVICES</p><h1>${service.name === "Mobile Applications" ? "Mobile Application Development" : service.name === "CRM Systems" ? "Custom CRM Systems" : service.name === "Custom HRMS" ? "Custom HRMS Software" : service.name}</h1><p>${service.hero}</p><a class="button button-primary" href="/contact">Discuss your requirement ${icon("arrow")}</a></div>
//       <figure class="service-hero-image"><img src="${ASSETS}${service.images[0]}" alt="${service.name} service"><figcaption>${icon("check")}Built around measurable business value</figcaption></figure>
//     </section>
//     <section class="deliver-section section-wrap"><div class="deliver-copy"><p class="section-kicker">WHAT WE DELIVER</p><h2>${service.deliverTitle}</h2><p>${service.deliverIntro}</p></div><div class="deliver-list">${service.deliver.map((item) => `<article>${icon("check")}<span>${item}</span></article>`).join("")}</div></section>
//     <section class="service-pillars section-wrap">${[["Designed around users", "Clear journeys for daily use."], ["Focused on outcomes", "Useful activity visibility."], ["Ready to perform", "Reliable, scalable foundations."], ["Built with care", "Thoughtful quality checks."]].map(([title, text], index) => `<article>${icon(iconNames[index])}<div><strong>${title}</strong><span>${text}</span></div></article>`).join("")}</section>
//     <section class="why-section section-wrap"><div class="why-copy"><p class="section-kicker">WHY IT MATTERS</p><h2>${service.whyTitle}</h2><p>${service.why}</p><ul>${service.benefits.map((benefit) => `<li>${icon("check")}${benefit}</li>`).join("")}</ul></div><div class="why-graphic"><span>${service.tag}</span><div class="graphic-orbit"></div><div class="graphic-core">BC</div><small>BUILT AROUND YOUR VISION</small></div></section>
//     <section class="approach-section section-wrap"><p class="section-kicker">OUR APPROACH</p><h2>A clear path from requirement to release.</h2><div class="approach-grid">${service.steps.map((step, index) => `<article><span>0${index + 1}</span><p>${step}</p></article>`).join("")}</div><div class="focus-banner"><span>IMPLEMENTATION FOCUS</span><strong>${service.focus}</strong></div></section>
//     <section class="work-together section-wrap"><div class="work-copy"><p class="section-kicker">WORKING TOGETHER</p><h2>How we work on ${service.workflow}.</h2><a href="/contact">Start a conversation ${icon("arrow")}</a></div><div class="work-list">${service.practices.map(([title, text], index) => `<article><span>0${index + 1}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join("")}</div><img class="process-image" src="${ASSETS}${service.images[1]}" alt="${service.implementationAlt}" loading="lazy"></section>
//     <section class="service-cta"><p>Have a ${service.workflow} requirement?</p><a href="/contact">Start a conversation ${icon("arrow")}</a></section>
//   </main>`;
// }

// function notFoundPage() {
//   return `<main class="not-found"><p class="section-kicker">404 — PAGE NOT FOUND</p><h1>We couldn't find that page.</h1><a class="button button-primary" href="/">Return to homepage ${icon("arrow")}</a></main>`;
// }

// function render() {
//   const path = window.location.pathname.replace(/\/+$/, "") || "/";
//   const service = services.find((item) => routeFor(item.slug) === path);
//   const pages = {
//     "/": homePage,
//     "/about": aboutPage,
//     "/contact": contactPage,
//     "/careers": careersPage,
//   };
//   const page = pages[path]?.() ?? (service ? servicePage(service) : notFoundPage());
//   document.querySelector("#app").innerHTML = `${header()}${page}${footer()}`;
//   document.title = path === "/"
//     ? "BlackCode | Websites, Software & SaaS Development"
//     : path === "/about"
//       ? "About Us | BlackCode"
//       : path === "/contact"
//         ? "Contact Us | BlackCode"
//         : path === "/careers"
//           ? "Careers | BlackCode"
//           : service
//             ? `${service.name} | BlackCode`
//             : "Page not found | BlackCode";
//   bindInteractions();
//   if (window.location.hash) {
//     requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView());
//   } else {
//     window.scrollTo(0, 0);
//   }
// }

// function bindInteractions() {
//   const menuToggle = document.querySelector(".menu-toggle");
//   const navigation = document.querySelector(".main-nav");
//   menuToggle.addEventListener("click", () => {
//     const expanded = menuToggle.getAttribute("aria-expanded") === "true";
//     menuToggle.setAttribute("aria-expanded", String(!expanded));
//     menuToggle.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
//     menuToggle.innerHTML = icon(expanded ? "menu" : "close");
//     navigation.classList.toggle("nav-open", !expanded);
//   });

//   const servicesToggle = document.querySelector(".services-toggle");
//   const servicesDropdown = document.querySelector(".services-dropdown");
//   servicesToggle.addEventListener("click", () => {
//     const expanded = servicesToggle.getAttribute("aria-expanded") === "true";
//     servicesToggle.setAttribute("aria-expanded", String(!expanded));
//     servicesDropdown.classList.toggle("dropdown-open", !expanded);
//   });

//   document.querySelectorAll("form[data-form]").forEach((form) => {
//     form.addEventListener("submit", (event) => {
//       event.preventDefault();
//       const status = form.querySelector(".form-status");
//       const data = new FormData(form);
//       const isCareer = form.dataset.form === "career";
//       const file = isCareer ? form.querySelector('input[type="file"]').files[0] : null;
//       if (file && file.size > 10 * 1024 * 1024) {
//         status.textContent = "Please choose a file smaller than 10 MB.";
//         status.classList.add("status-error");
//         return;
//       }
//       const subject = isCareer ? "BlackCode career application" : "BlackCode project enquiry";
//       const lines = [...data.entries()]
//         .filter(([key, value]) => key !== "resume" && value)
//         .map(([key, value]) => `${key}: ${value}`);
//       if (file) lines.push(`Resume: ${file.name} (please attach this file to your email)`);
//       const mailto = `mailto:info@blackcode.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
//       status.classList.remove("status-error");
//       status.textContent = "Opening your email app with the details. Please review and send the message to complete your enquiry.";
//       window.location.href = mailto;
//     });
//   });

//   const fileInput = document.querySelector(".file-input");
//   fileInput?.addEventListener("change", () => {
//     const file = fileInput.files[0];
//     const name = document.querySelector(".file-name");
//     if (!file) {
//       name.textContent = "No file chosen";
//       return;
//     }
//     const allowed = /\.(pdf|doc|docx)$/i.test(file.name);
//     if (!allowed || file.size > 10 * 1024 * 1024) {
//       fileInput.value = "";
//       name.textContent = "Choose a PDF, DOC or DOCX file under 10 MB";
//       name.classList.add("status-error");
//       return;
//     }
//     name.textContent = file.name;
//     name.classList.remove("status-error");
//   });
// }

// window.addEventListener("click", (event) => {
//   const link = event.target.closest("a");
//   if (!link) return;

//   const href = link.getAttribute("href");
//   if (!href) return;

//   if (
//     link.target === "_blank" ||
//     link.origin !== window.location.origin ||
//     href.startsWith("mailto:") ||
//     href.startsWith("tel:")
//   ) {
//     return;
//   }

//   if (href.startsWith("#")) {
//     return;
//   }

//   event.preventDefault();
//   const targetUrl = new URL(link.href, window.location.origin);
//   if (window.location.pathname !== targetUrl.pathname || window.location.search !== targetUrl.search) {
//     window.history.pushState(null, "", href);
//     render();
//   } else {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }
// });

// window.addEventListener("popstate", () => {
//   render();
// });

// render();


const ASSETS = "/assets/";
const LOGO = `${ASSETS}blackcode_logo-7QPW17i3.png`;
const WHITE_LOGO = `${ASSETS}blackcode_white-Ca6hyRi_.png`;
const SUITE_URL = "https://app.blackcode.in/";
const WHATSAPP_URL =
  "https://wa.me/918527952043?text=Hello%20BlackCode%2C%20I%20would%20like%20to%20discuss%20my%20project.";

const services = [
  {
    slug: "custom-web-development",
    tag: "WEB",
    name: "Custom Web Development",
    card: "Professional, conversion-focused websites that make your brand easy to trust and contact.",
    hero: "Websites that explain your value clearly and turn visitors into enquiries.",
    deliverTitle: "A website built around your business goals.",
    deliverIntro:
      "We plan, design and develop responsive websites around the questions your customers ask, the trust they need and the action you want them to take.",
    deliver: [
      "Website strategy, sitemap and page planning",
      "Responsive design for every screen size",
      "Lead forms, CRM connections and analytics",
      "Technical SEO, speed and launch support",
    ],
    whyTitle: "Turn a first visit into a confident enquiry.",
    why:
      "A business website has only a few moments to make its purpose clear. Page structure, proof, performance and contact paths work together to help visitors find the right answer and take the next step.",
    benefits: [
      "A stronger digital first impression",
      "Clearer paths to calls, forms and enquiries",
    ],
    steps: [
      "Map your audience and conversion journey.",
      "Design a credible interface and page hierarchy.",
      "Build, test and launch with tracking.",
    ],
    focus: "A responsive website that earns trust and supports lead generation.",
    workflow: "website",
    practices: [
      ["Shape the website story", "We organise your services, proof and calls to action around the questions customers ask before contacting you."],
      ["Review real customer journeys", "We validate important pages, mobile layouts and form paths before the site goes live."],
      ["Improve with live data", "Analytics shows where visitors engage, leave and convert, guiding future content improvements."],
    ],
    images: ["web-development-hero-B8KaRdlw.jpg", "web-development-process-real-D7-DQzaa.jpg"],
    implementationAlt: "Custom Web Development implementation",
  },
  {
    slug: "ecommerce-product-platforms",
    tag: "SHOP",
    name: "E-commerce & Product Platforms",
    card: "Easy-to-manage product experiences designed for discovery, checkout and repeat sales.",
    hero: "Digital storefronts that make product discovery and checkout simple.",
    deliverTitle: "Commerce experiences built to sell and scale.",
    deliverIntro:
      "We connect the customer-facing shop with product data, payments, orders and fulfilment, making the platform easier for customers to use and teams to operate.",
    deliver: [
      "Catalogues, collections, filters and search",
      "Cart, secure payments and mobile checkout",
      "Order, inventory and fulfilment integrations",
      "Customer accounts and conversion tracking",
    ],
    whyTitle: "Make buying easier from first browse to fulfilment.",
    why:
      "A smooth commerce experience brings product discovery, checkout and operations together. Every step should be clear for customers and manageable for the team behind the store.",
    benefits: [
      "A simpler path from product discovery to purchase",
      "Connected order and inventory workflows",
    ],
    steps: [
      "Plan the catalogue and buying journey.",
      "Connect checkout, payments and operations.",
      "Test the experience and prepare launch.",
    ],
    focus: "A product platform designed to make buying and fulfilment straightforward.",
    workflow: "e-commerce",
    practices: [
      ["Organise product information", "Clear categories, product details and filters help customers find what they need."],
      ["Test the checkout journey", "We review the complete purchase flow across screens, payment states and customer scenarios."],
      ["Support operational handoff", "Orders, stock and fulfilment information stay connected to the teams handling them."],
    ],
    images: ["ecommerce-hero-real-D1DXJTYF.jpg", "ecommerce-process-real-BQQq-SoK.jpg"],
    implementationAlt: "E-commerce & Product Platforms implementation",
  },
  {
    slug: "mobile-applications",
    tag: "APP",
    name: "Mobile Applications",
    card: "Practical mobile products for customers, operations teams and field staff.",
    hero: "Mobile products that simplify important customer and workforce tasks.",
    deliverTitle: "Apps designed for real-world use.",
    deliverIntro:
      "We build focused mobile experiences for customers, staff and field teams, supported by secure APIs and a release plan that puts the right workflows first.",
    deliver: [
      "MVP discovery and user-flow planning",
      "Customer, staff and field-team journeys",
      "Secure APIs and notifications",
      "Device testing and release preparation",
    ],
    whyTitle: "Put important tasks in users' hands.",
    why:
      "A mobile app needs to work in short, interrupted moments—not just look good in a demo. We focus on essential actions, clear feedback and reliable connections to the systems behind the app.",
    benefits: [
      "Faster completion of high-value tasks",
      "A practical experience for users on the move",
    ],
    steps: [
      "Define the highest-value mobile tasks.",
      "Design screens for fast, simple use.",
      "Integrate, test and prepare release.",
    ],
    focus: "Mobile journeys that are focused, intuitive and reliable in real use.",
    workflow: "mobile app",
    practices: [
      ["Prioritise the first release", "We identify the smallest set of app workflows that creates meaningful value for users."],
      ["Prototype key screens", "Early interface reviews make navigation, language and actions easier to refine."],
      ["Test real device conditions", "We check important flows on the phones, networks and scenarios your users encounter."],
    ],
    images: ["mobile-hero-real-R31wIm3b.jpg", "mobile-process-real-C1r-yBCX.jpg"],
    implementationAlt: "Mobile Application Development implementation",
  },
  {
    slug: "saas-application-development",
    tag: "SAAS",
    name: "SaaS Application Development",
    card: "Subscription products with multi-tenant architecture, permissions and room to grow.",
    hero: "Subscription products with secure accounts, roles and room to grow.",
    deliverTitle: "Launch a focused SaaS product with confidence.",
    deliverIntro:
      "We help shape a valuable first release while building the foundations for tenants, permissions, administration and future subscription plans.",
    deliver: [
      "MVP scope and workflow planning",
      "Multi-tenant accounts and user roles",
      "Subscription-ready foundations and admin tools",
      "Dashboards, reporting and scalable APIs",
    ],
    whyTitle: "Build a product customers can adopt and grow with.",
    why:
      "SaaS delivery requires product thinking as well as software engineering. Account structure, permissions, onboarding and administration need to feel coherent from the first customer through future growth.",
    benefits: [
      "A focused MVP with clear customer value",
      "Foundations for plans, roles and future releases",
    ],
    steps: [
      "Validate the product proposition.",
      "Build secure product foundations.",
      "Prepare the platform for growth.",
    ],
    focus: "A subscription product designed to validate demand without blocking future scale.",
    workflow: "SaaS",
    practices: [
      ["Define the customer workflow", "We turn the problem your product solves into a coherent first-use and repeat-use experience."],
      ["Plan tenant and role behaviour", "We clarify what each customer, user and administrator can see or manage."],
      ["Learn from early adoption", "Feedback and product usage guide the most valuable changes after launch."],
    ],
    images: ["saas-hero-real-MchCnzxE.jpg", "saas-process-real-BWLcuv8O.jpg"],
    implementationAlt: "SaaS Application Development implementation",
  },
  {
    slug: "custom-erp-solutions",
    tag: "ERP",
    name: "Custom ERP Solutions",
    card: "Connected operational systems built around purchasing, inventory, finance and reporting.",
    hero: "Connected operational software for purchasing, inventory and reporting.",
    deliverTitle: "Bring essential business operations into one system.",
    deliverIntro:
      "We build ERP software around your actual workflows, removing duplicate work and giving teams clearer ownership, approvals and decision-ready information.",
    deliver: [
      "Purchasing, inventory and supplier workflows",
      "Approvals, task ownership and audit history",
      "Role-based access and dashboards",
      "Custom management and finance reports",
    ],
    whyTitle: "Replace fragmented operations with a connected view.",
    why:
      "ERP projects succeed when they reflect the real movement of work, stock, approvals and information. We focus on removing bottlenecks and giving decision-makers useful operational visibility.",
    benefits: [
      "Less duplicate data entry across teams",
      "More reliable operational control and reporting",
    ],
    steps: [
      "Map your current operating processes.",
      "Build the essential modules.",
      "Deliver actionable reporting.",
    ],
    focus: "Connected workflows that make daily operations easier to manage.",
    workflow: "ERP",
    practices: [
      ["Map work before software", "We document the handoffs, exceptions and approvals that shape your actual process."],
      ["Introduce modules in priority order", "The most valuable workflows can be delivered first without overwhelming the team."],
      ["Use reports to improve operations", "Dashboards highlight status, exceptions and trends that deserve attention."],
    ],
    images: ["erp-hero-real-DmgDLOny.jpg", "erp-process-real-B-GlnTQS.jpg"],
    implementationAlt: "Custom ERP Solutions implementation",
  },
  {
    slug: "crm-systems",
    tag: "CRM",
    name: "CRM Systems",
    card: "Lead, customer and follow-up systems that give sales teams a clear next action.",
    hero: "Lead and follow-up systems that give sales teams a clear next action.",
    deliverTitle: "A CRM shaped around how your team sells.",
    deliverIntro:
      "We build custom CRM workflows around your lead sources, sales stages and responsibilities, giving every opportunity a complete history and clear ownership.",
    deliver: [
      "Lead capture, assignment and sales stages",
      "Customer records and activity history",
      "Follow-up reminders, tasks and quotations",
      "Sales dashboards, permissions and reports",
    ],
    whyTitle: "Give every opportunity a clear next action.",
    why:
      "Sales momentum drops when leads, notes and follow-ups sit in different places. A tailored CRM keeps context with the opportunity and helps managers understand the health of the pipeline.",
    benefits: [
      "More consistent follow-up from the sales team",
      "A complete and searchable customer history",
    ],
    steps: [
      "Define your real sales process.",
      "Centralise customer activity.",
      "Improve pipeline visibility.",
    ],
    focus: "A sales workspace that reduces guesswork and improves pipeline discipline.",
    workflow: "CRM",
    practices: [
      ["Reflect your sales stages", "We shape fields, statuses and ownership around the process your team already follows."],
      ["Keep the next action visible", "Tasks, reminders and notes are designed to help reps move opportunities forward."],
      ["Review pipeline quality", "Reports reveal lead sources, stage movement and follow-up gaps that need attention."],
    ],
    images: ["crm-hero-real-D03mAlAd.jpg", "crm-process-real-BiSjZ-dc.jpg"],
    implementationAlt: "Custom CRM Systems implementation",
  },
  {
    slug: "custom-hrms",
    tag: "HR",
    name: "Custom HRMS",
    card: "Clear people operations for employee records, attendance, leave and payroll inputs.",
    hero: "Clear people operations for employee records, attendance and leave.",
    deliverTitle: "Make everyday HR administration simpler.",
    deliverIntro:
      "We create HRMS systems around your policies and approval paths, so employees can self-serve while HR keeps accurate records and control.",
    deliver: [
      "Employee profiles, documents and onboarding",
      "Attendance, leave and approval workflows",
      "Employee self-service and permissions",
      "Payroll inputs and HR reporting",
    ],
    whyTitle: "Make people operations clearer for employees and HR.",
    why:
      "Employee records, leave and attendance work best when everyone has one reliable place to act. A tailored HRMS reduces routine coordination while keeping approvals and information controlled.",
    benefits: [
      "Less manual work for routine HR requests",
      "More accurate employee, leave and attendance records",
    ],
    steps: [
      "Review people processes and policies.",
      "Build self-service workflows.",
      "Support accurate HR administration.",
    ],
    focus: "Practical HR workflows that balance self-service with policy control.",
    workflow: "HRMS",
    practices: [
      ["Translate policy into workflows", "We map leave, attendance and approval rules before building the employee experience."],
      ["Design employee self-service", "Employees can access the right records and requests without exposing sensitive HR information."],
      ["Maintain record quality", "Clear permissions and reporting help HR keep information current and auditable."],
    ],
    images: ["hrms-hero-real-C8-Xk4oW.jpg", "hrms-process-real-C2EwMc8n.jpg"],
    implementationAlt: "Custom HRMS Software implementation",
  },
  {
    slug: "digital-marketing-seo",
    tag: "GROW",
    name: "Digital Marketing & SEO",
    card: "Campaign-ready landing pages and search foundations built for qualified traffic.",
    hero: "Search and campaign foundations that bring more qualified visitors.",
    deliverTitle: "Visibility connected to measurable business results.",
    deliverIntro:
      "We improve the pages, search foundations and tracking needed to understand which activity brings relevant visitors and enquiries—not just traffic.",
    deliver: [
      "Technical SEO reviews and priority fixes",
      "Search-intent and content direction",
      "Campaign landing pages and conversion improvements",
      "Analytics, events and performance reporting",
    ],
    whyTitle: "Connect visibility with qualified business demand.",
    why:
      "Traffic is only valuable when it reaches the right audience and gives them a clear reason to act. SEO, landing pages and measurement need to work as one connected acquisition journey.",
    benefits: [
      "Better alignment between search intent and page content",
      "Clearer evidence of which activity creates enquiries",
    ],
    steps: [
      "Identify high-value search opportunities.",
      "Strengthen pages and conversion tracking.",
      "Use results to guide the next improvement.",
    ],
    focus: "A search and campaign foundation built around qualified demand.",
    workflow: "SEO",
    practices: [
      ["Understand search intent", "We identify what prospective customers are looking for and the content needed to meet that need."],
      ["Improve conversion paths", "Landing pages and calls to action are refined to make the next step obvious."],
      ["Measure meaningful activity", "Tracking focuses on enquiries, calls and the signals that help evaluate marketing performance."],
    ],
    images: ["seo-hero-real-B4LG3Be0.jpg", "seo-process-real-VoR7I0vf.jpg"],
    implementationAlt: "Digital Marketing & SEO implementation",
  },
  {
    slug: "performance-security",
    tag: "FAST",
    name: "Performance & Security",
    card: "Improve stability, speed and security before small technical issues become business risks.",
    hero: "Practical improvements for faster, safer and more dependable digital products.",
    deliverTitle: "Protect confidence in your website or application.",
    deliverIntro:
      "We review speed, stability and security together, then focus on the technical improvements that reduce avoidable risk and create a better user experience.",
    deliver: [
      "Page speed and application performance reviews",
      "Security hardening and access controls",
      "Reliability, backup and deployment checks",
      "Monitoring and technical health guidance",
    ],
    whyTitle: "Protect the experience customers and teams depend on.",
    why:
      "Speed, reliability and security are connected business concerns. A slow, unstable or poorly protected product can affect trust long before a major incident occurs.",
    benefits: [
      "A faster and more dependable user experience",
      "Reduced exposure to avoidable technical risk",
    ],
    steps: [
      "Assess performance, stability and risk.",
      "Implement the priority improvements.",
      "Establish ongoing health checks.",
    ],
    focus: "Prioritised technical improvements that strengthen confidence and reliability.",
    workflow: "performance and security",
    practices: [
      ["Identify the highest-impact risks", "We review performance bottlenecks, access practices and reliability weaknesses in context."],
      ["Fix and verify improvements", "Changes are tested against the behaviour and environments that matter to your users."],
      ["Establish healthy habits", "Monitoring and release checks help preserve performance and security over time."],
    ],
    images: ["security-hero-real-BshukN3H.jpg", "security-process-real-BWvJDg-1.jpg"],
    implementationAlt: "Performance & Security implementation",
  },
  {
    slug: "maintenance-long-term-support",
    tag: "CARE",
    name: "Maintenance & Long-Term Support",
    card: "Keep your digital product healthy with structured improvements and dependable support.",
    hero: "Structured support that keeps your website or software useful after launch.",
    deliverTitle: "A dependable rhythm for product care and improvement.",
    deliverIntro:
      "We manage fixes, updates, performance checks and planned enhancements through a clear support process so your product stays secure, reliable and aligned with the business.",
    deliver: [
      "Routine updates, backups and health checks",
      "Issue investigation and release support",
      "Performance and security maintenance",
      "Feature enhancements and product planning",
    ],
    whyTitle: "Keep your product useful after the initial launch.",
    why:
      "Websites and software change with the business using them. A visible support process keeps small issues from becoming urgent and makes room for practical, planned improvements.",
    benefits: [
      "A predictable process for fixes and updates",
      "A product that stays aligned with changing needs",
    ],
    steps: [
      "Set a clear support and priority rhythm.",
      "Maintain the product proactively.",
      "Plan the most useful enhancements.",
    ],
    focus: "Ongoing care that keeps software stable, current and useful.",
    workflow: "support",
    practices: [
      ["Agree how support works", "We establish clear priorities, communication and ownership for support requests."],
      ["Maintain proactively", "Updates, checks and small fixes are addressed before avoidable disruption builds up."],
      ["Plan future improvements", "Regular reviews turn feedback and business priorities into a manageable enhancement roadmap."],
    ],
    images: ["support-hero-real-DCp12NS_.jpg", "support-process-real-DehHtF1p.jpg"],
    implementationAlt: "Maintenance & Long-Term Support implementation",
  },
];

const routeFor = (slug) => `/services/${slug}`;
const projectTypes = [
  "Website",
  "Mobile app",
  "CRM",
  "HRMS / HRM",
  "ERP",
  "E-commerce platform",
  "Custom software",
  "Other / not sure",
];

function icon(name, className = "") {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    check: '<path d="m5 12 4 4L19 6"/><circle cx="12" cy="12" r="10"/>',
    spark: '<path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z"/><path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
    cart: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>',
    phone: '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/>',
    box: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 8 9 5 9-5M3 8v9l9 5 9-5V8M12 13v9"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M20 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    trending: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
    shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
    wrench: '<path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L2 19l3 3 6.3-6.3a5 5 0 0 0 6.4-6.4L14 13l-3-3 3.7-3.7Z"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    briefcase: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>',
  };
  return `<svg class="icon ${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.spark}</svg>`;
}

function header() {
  return `<header class="site-header">
    <a class="brand" href="/" aria-label="BlackCode home"><img src="${LOGO}" alt="BlackCode"></a>
    <button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false">${icon("menu")}</button>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <div class="services-menu">
        <button class="services-toggle" type="button" aria-expanded="false">Services <span class="chevron"></span></button>
        <div class="services-dropdown">
          <div><h4>Digital Products</h4>${services.slice(0, 3).map((service) => `<a href="${routeFor(service.slug)}">${service.name}</a>`).join("")}</div>
          <div><h4>Business Systems</h4>${services.slice(3, 7).map((service) => `<a href="${routeFor(service.slug)}">${service.name}</a>`).join("")}</div>
          <div><h4>Growth &amp; Support</h4>${services.slice(7).map((service) => `<a href="${routeFor(service.slug)}">${service.name}</a>`).join("")}</div>
        </div>
      </div>
      <a href="${SUITE_URL}" target="_blank" rel="noreferrer">Suite</a>
      <a href="/careers">Careers</a>
      <a href="/contact">Contact Us</a>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" aria-label="BlackCode home"><img src="${WHITE_LOGO}" alt="BlackCode"></a>
        <p>BlackCode delivers web applications, e-commerce platforms, mobile apps and business software for modern teams.</p>
        <div class="social-links" aria-label="BlackCode social media">
          <a aria-label="BlackCode on Facebook" href="https://www.facebook.com" target="_blank" rel="noreferrer">f</a>
          <a aria-label="BlackCode on X" href="https://x.com" target="_blank" rel="noreferrer">𝕏</a>
          <a aria-label="BlackCode on LinkedIn" href="https://www.linkedin.com/in/blackcode-t-97a8103aa" target="_blank" rel="noreferrer">in</a>
          <a aria-label="BlackCode on Instagram" href="https://www.instagram.com/blackcode_technology" target="_blank" rel="noreferrer">◎</a>
        </div>
      </div>
      <nav class="footer-links" aria-label="Company links"><h4>Company</h4><a href="/">Home</a><a href="/about">About Us</a><a href="${SUITE_URL}" target="_blank" rel="noreferrer">Suite</a><a href="/careers">Careers</a><a href="/contact">Contact</a></nav>
      <nav class="footer-links" aria-label="Service links"><h4>Services</h4>${services.slice(0, 5).map((service) => `<a href="${routeFor(service.slug)}">${service.name === "E-commerce & Product Platforms" ? "E-commerce Platforms" : service.name}</a>`).join("")}</nav>
      <div class="footer-contact"><h4>Contact Us</h4><p>${icon("pin")}<span>A-70 Second Floor, Sector-2 Noida, Gautam Buddha Nagar, U.P. 201301.</span></p><a href="tel:+917965315313">${icon("phone")}<span>+91 7965315313</span></a><a href="mailto:info@blackcode.in">${icon("mail")}<span>info@blackcode.in</span></a></div>
    </div>
    <div class="footer-bottom">© 2026 BlackCode. All rights reserved.</div>
  </footer>
  <a class="whatsapp" href="${WHATSAPP_URL}" aria-label="Chat with BlackCode on WhatsApp" target="_blank" rel="noreferrer"><svg class="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2a12.4 12.4 0 0 0-10.6 18.8L4 28l6.2-1.3A12.4 12.4 0 1 0 16 3.2Zm0 22.2c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.7.8.8-3.6-.3-.5a9.2 9.2 0 1 1 8.9 5Zm5.1-6.9c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.4.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-1-2.1-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.7 1.1 2.9c.2.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.4Z"/></svg><span>Chat with us</span></a>`;
}

function leadForm(className = "") {
  return `<form class="lead-form ${className}" data-form="enquiry" novalidate>
    <label>
      Full name
      <input
        name="fullname"
        type="text"
        placeholder="Your name"
        autocomplete="name"
        required
      >
      <span class="field-error" aria-live="polite"></span>
    </label>

    <label>
      Email address
      <input
        name="email"
        type="email"
        placeholder="you@company.com"
        autocomplete="email"
        title="Please enter a valid email address (e.g., name@domain.com)"
        required
      >
      <span class="field-error" aria-live="polite"></span>
    </label>

    <label>
      Phone number
      <input
        name="phone"
        type="tel"
        placeholder="10-digit mobile number"
        autocomplete="tel"
        inputmode="numeric"
        pattern="[6-9][0-9]{9}"
        title="Enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9"
        required
      >
      <span class="field-error" aria-live="polite"></span>
    </label>

    <label>
      City or location
      <input
        name="location"
        type="text"
        placeholder="City / location"
        autocomplete="address-level2"
      >
      <span class="field-error" aria-live="polite"></span>
    </label>

    <label>
      Project interest
      <select name="projectType" required>
        <option value="" disabled selected>Choose a project type</option>
        ${projectTypes.map((type) => `<option>${type}</option>`).join("")}
      </select>
      <span class="field-error" aria-live="polite"></span>
    </label>

    <label class="full-field">
      Project requirement
      <textarea
        name="description"
        maxlength="1000"
        placeholder="Tell us what you want to build"
        required
      ></textarea>
      <span class="field-error" aria-live="polite"></span>
    </label>

    <button class="button button-primary" type="submit">
      Send enquiry ${icon("arrow")}
    </button>

    <p class="form-status" aria-live="polite"></p>
  </form>`;
}

function homePage() {
  return `<main>
    <section class="home-hero">
      <div class="hero-content">
        <p class="eyebrow">Build what your business needs next</p>
        <h1>From your first website to the systems behind your growth.</h1>
        <p class="hero-copy">BlackCode designs, develops and supports digital products that help businesses sell, operate and scale with clarity.</p>
        <div class="hero-actions"><a class="button button-primary" href="/contact">Start a project ${icon("arrow")}</a><a class="button button-outline" href="#what-we-do">Explore what we do</a></div>
        <div class="hero-promises"><span>${icon("check")}Business-first scope</span><span>${icon("check")}Clear milestones</span><span>${icon("check")}Support that continues</span></div>
      </div>
      <div class="hero-visual" aria-label="BlackCode digital services">
        <div class="visual-label">BLACKCODE / BUILD</div>
        <div class="visual-title"><span>Websites</span><span>E-Commerce</span><em>SaaS products</em></div>
        <div class="visual-pills"><span>CRM</span><span>HRMS</span><span>ERP</span><span>AI</span></div>
        <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div>
      </div>
    </section>
    <section class="services-section section-wrap" id="what-we-do">
      <div class="section-heading"><div><p class="section-kicker">WHAT WE DO</p><h2>The digital work your business cannot afford to get wrong.</h2></div><p>Choose one focused service or connect several into one complete operating system.</p></div>
      <div class="service-grid">${services.map((service, index) => `<a class="service-card" href="${routeFor(service.slug)}"><div class="service-card-top"><span class="service-icon">${icon(["globe", "cart", "phone", "layers", "box", "users", "users", "trending", "shield", "wrench"][index])}</span><span class="service-tag">${service.tag}</span></div><h3>${service.name}</h3><p>${service.card}</p><span class="discover">Discover ${icon("arrow")}</span></a>`).join("")}</div>
    </section>
    <section class="counters" aria-label="BlackCode at a glance"><div><strong>10</strong><span>Specialised Services</span></div><div><strong>01</strong><span>Connected BlackCode Suite</span></div><div><strong>100%</strong><span>Custom-Built Solutions</span></div><div><strong>∞</strong><span>Room For Your Next Stage</span></div></section>
    <section class="suite-section section-wrap"><div class="suite-copy"><p class="section-kicker">BLACKCODE SUITE</p><h2>One platform. The modules your team needs today.</h2><p>CRM, ERP, HRMS, Inventory, Billing, Payroll, Projects, Help Desk and AI—activated as your business grows.</p><a class="button button-primary" href="${SUITE_URL}" target="_blank" rel="noreferrer">Explore Suite plans ${icon("arrow")}</a></div><div class="suite-art"><div class="suite-window"><span>BLACKCODE / SUITE</span><div class="suite-logo">BC<span>+</span></div><strong>Start with CRM</strong><p>Build a connected business suite, one useful module at a time.</p><div class="suite-modules"><i>CRM</i><i>ERP</i><i>HRMS</i><i>AI</i></div></div></div></section>
    <section class="process-section section-wrap"><div class="section-heading"><div><p class="section-kicker">HOW WE WORK</p><h2>Focused delivery, without unnecessary complexity.</h2></div></div><div class="process-grid"><article>${icon("spark")}<span>01</span><h3>Discover</h3><p>Align on goals, users and the right first release.</p></article><article>${icon("layers")}<span>02</span><h3>Design</h3><p>Turn ideas into a clear product and delivery plan.</p></article><article>${icon("check")}<span>03</span><h3>Build &amp; support</h3><p>Create, launch and improve with confidence.</p></article></div></section>
    <section class="home-cta"><div class="cta-copy"><p class="section-kicker">Have a project in mind?</p><h2>Let's make it useful, fast and built to last.</h2></div>${leadForm("home-lead-form")}</section>
  </main>`;
}

function aboutPage() {
  return `<main class="inner-page about-page">
    <section class="page-hero">
      <p class="section-kicker">ABOUT BLACKCODE</p>
      <h1>More Than Code. A Thoughtful Technology Company.</h1>
      <p>BlackCode was created with a simple belief — software should solve real problems, not create new ones.</p>
    </section>
    <section class="story-section section-wrap">
      <div class="story-copy">
        <p class="section-kicker">PURPOSEFUL TECHNOLOGY</p>
        <h2>Our Story</h2>
        <p>BlackCode started with a simple goal: build meaningful digital systems that make everyday work clearer, easier, and more connected. We approach each challenge with structure and a focus on the people who will use the product.</p>
        <p>Today, we bring that same care to business software, websites, and custom applications. We value dependable architecture, thoughtful user experiences, and solutions that can grow with the business behind them.</p>
        <div class="story-tags">
          <span>Built around real workflows</span>
          <span>Designed to grow with you</span>
        </div>
      </div>
      <figure>
        <img src="${ASSETS}about-team-BL3NAJQc.jpg" alt="A collaborative software team working together around a laptop">
        <figcaption>
          <span>Good technology starts with understanding people.</span>
          <span>Thoughtful work. Practical outcomes.</span>
        </figcaption>
      </figure>
    </section>
    <section class="thinking-section">
      <div class="section-wrap">
        <h2>How We Think</h2>
        <div class="thinking-grid">
          <article>
            <h3>Clarity Before Complexity</h3>
            <p>We believe simple systems outperform complex ones in the long run.</p>
          </article>
          <article>
            <h3>Architecture Matters</h3>
            <p>A strong foundation ensures performance, security, and scalability.</p>
          </article>
          <article>
            <h3>Business Context First</h3>
            <p>Technology decisions should support real-world workflows.</p>
          </article>
          <article>
            <h3>Sustainability Over Speed</h3>
            <p>We value long-term stability over short-term delivery pressure.</p>
          </article>
        </div>
      </div>
    </section>
    <section class="about-callout">
      <h2>Let’s Build Something Great Together</h2>
      <p>Have an idea for a website, ERP, or SaaS product? Let BlackCode bring it to life.</p>
      <a class="button button-primary" href="/contact">Start Your Project</a>
    </section>
    <section class="culture-section section-wrap">
      <h2>Our Culture</h2>
      <p>We operate with a mindset of ownership, accountability, and respect for craftsmanship. Every engineer at BlackCode treats projects as long-term products, not temporary assignments.</p>
      <p>We encourage continuous learning, thoughtful decision-making, and open communication. Our culture prioritizes calm execution, realistic timelines, and honest feedback — both internally and with clients.</p>
    </section>
    <section class="trust-section">
      <div class="section-wrap">
        <h2>Building Trust Through Process</h2>
        <p>Trust is built through consistency. We focus on clear documentation, predictable delivery, and transparent communication throughout every engagement.</p>
        <p>Our clients value us not only for technical skill, but for our ability to think ahead, anticipate challenges, and design systems that grow gracefully with their business.</p>
      </div>
    </section>
    <section class="partnership-section">
      <div class="section-wrap">
        <p class="section-kicker">WORKING WITH BLACKCODE</p>
        <h2>Good Work Starts With a Clear Partnership</h2>
        <p>From the first conversation through launch and beyond, we keep the work focused on your goals and the people who rely on your systems.</p>
        <div class="partnership-grid">
          <article>
            <span>01</span>
            <h3>Understand the need</h3>
            <p>We begin by learning your workflows, priorities, and what success should look like.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Build with clarity</h3>
            <p>We shape a practical solution with clear decisions, regular feedback, and careful execution.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Support what comes next</h3>
            <p>We plan for the next stage too, so your product can adapt as your business changes.</p>
          </article>
        </div>
      </div>
    </section>
  </main>`;
}

function contactPage() {
  return `<main class="inner-page contact-page">
    <section class="contact-hero"><div><p class="section-kicker">LET’S TALK ABOUT YOUR PROJECT</p><h1>Good work starts<br>with a conversation.</h1><p>Tell us what you’re planning. Our team will help you map the right solution, scope, and next steps.</p><div class="contact-points"><span>${icon("check")}Replies within one business day</span><span>${icon("check")}Web, mobile &amp; business software</span></div></div><div class="contact-hero-mark"><span>BC</span><small>CONTACT DETAILS</small><i></i></div></section>
    <section class="contact-layout section-wrap"><div class="contact-info"><p class="section-kicker">CONTACT DETAILS</p><h2>We’re here to help.</h2><p>Have a project in mind or need a little direction? Reach out and we’ll connect you with the right team.</p><div class="contact-detail"><span class="detail-icon">${icon("pin")}</span><div><small>VISIT OUR OFFICE</small><p>A-70, Second Floor, Sector 2,<br>Noida, Uttar Pradesh 201301</p></div></div><div class="contact-detail"><span class="detail-icon">${icon("phone")}</span><div><small>CALL OUR TEAM</small><a href="tel:+917965315313">+91 79653 15313</a></div></div><div class="contact-detail"><span class="detail-icon">${icon("mail")}</span><div><small>EMAIL US</small><a href="mailto:info@blackcode.in">info@blackcode.in</a></div></div><div class="contact-detail"><span class="detail-icon">${icon("clock")}</span><div><small>OFFICE HOURS</small><p>Mon–Fri, 9:00 AM–6:00 PM<br>Saturday, 10:00 AM–3:00 PM · Sunday closed</p></div></div><div class="connect-links"><span>Connect with us</span><a href="https://www.linkedin.com/in/blackcode-t-97a8103aa" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.instagram.com/blackcode_technology" target="_blank" rel="noreferrer">Instagram</a></div></div>
      <div class="contact-form-panel"><p class="section-kicker">PROJECT INQUIRY</p><h2>Tell us what you need</h2><p>Share a few details and we’ll take it from here.</p>${leadForm("contact-lead-form")}<p class="privacy-note">Your details are only used to respond to your inquiry.</p></div></section>
    <section class="faq-section section-wrap"><div><p class="section-kicker">A FEW QUICK ANSWERS</p><h2>Before we connect</h2></div><div class="faq-list">${[["How soon will you get back to me?", "Our team usually responds within one business day."], ["Can you help define the scope?", "Yes. We’ll discuss your goals and recommend a practical approach."], ["Do you support projects after launch?", "We offer ongoing maintenance and support for delivered projects."]].map(([question, answer], index) => `<details ${index === 0 ? "open" : ""}><summary>${question}<span>+</span></summary><p>${answer}</p></details>`).join("")}</div></section>
    <section class="map-section section-wrap"><div class="map-copy"><p class="section-kicker">FIND US</p><h2>Visit our Noida office</h2><p>A-70, Second Floor, Sector 2,<br>Noida, Uttar Pradesh 201301</p><a href="https://maps.google.com/maps?q=A-70%20Second%20Floor%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301" target="_blank" rel="noreferrer">Open in Maps ${icon("arrow")}</a></div><iframe title="Map to BlackCode's Noida office" loading="lazy" src="https://maps.google.com/maps?q=A-70%20Second%20Floor%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301&output=embed"></iframe></section>
  </main>`;
}

function careersPage() {
  const fields = [
    ["Full Name", "fullname", "text", true, "name"],
    ["Email Address", "email", "email", true, "email"],
    ["Mobile Number", "phone", "tel", true, "tel"],
    ["Current Location", "location", "text", true, "address-level2"],
    ["Highest Qualification", "qualification", "text", true, ""],
    ["Position Applying For", "position", "text", true, ""],
    ["Total Experience (years)", "experience", "number", true, ""],
    ["Expected Salary (INR)", "expSalary", "number", false, ""],
  ];
  return `<main class="inner-page careers-page">
    <section class="page-hero career-hero"><p class="section-kicker">CAREERS AT BLACKCODE</p><h1>Careers at BlackCode</h1><p>We are always looking for talented individuals to join our team and grow together.</p></section>
    <section class="why-join section-wrap"><h2>Why Join Us</h2><div class="career-benefits">${[["Room to grow", "Build your skills in a supportive, growth-focused environment.", "trending"], ["Meaningful work", "Contribute to useful products and projects across industries.", "heart"], ["Teamwork that matters", "Share ideas and solve problems with a collaborative team.", "users"], ["Keep learning", "Take on new challenges and keep developing your craft.", "spark"]].map(([title, text, iconName]) => `<article>${icon(iconName)}<h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
    <section class="application-section section-wrap"><div><p class="section-kicker">JOIN OUR TEAM</p><h2>Apply for a Position</h2><p>Tell us a little about yourself and the role you’re looking for. Our team will review your application and get back to you.</p></div><form class="application-form" data-form="career" novalidate><div class="form-grid">${fields.map(([label, name, type, required, autocomplete]) => `<label>${label}<input name="${name}" type="${type}" placeholder="${label}" ${autocomplete ? `autocomplete="${autocomplete}"` : ""} ${name === "phone" ? 'inputmode="numeric" pattern="[6-9][0-9]{9}"' : ""} ${name === "experience" ? 'min="0" max="60" step="any"' : ""} ${name === "expSalary" ? 'min="0" step="any"' : ""} ${required ? "required" : ""}><span class="field-error" aria-live="polite"></span></label>`).join("")}<label class="full-field">Brief Introduction or Career Summary<textarea name="summary" placeholder="Brief Introduction or Career Summary"></textarea></label></div><label class="upload-box">${icon("briefcase")}<span><strong>Attach your CV or resume</strong><small>PDF, DOC or DOCX · Maximum file size 10 MB</small>    <span class="file-name" aria-live="polite">No file chosen</span></span><span class="button button-outline">Browse files</span><input class="file-input" type="file" name="resume" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" aria-label="Attach your CV or resume"></label><button class="button button-primary" type="submit">Submit Application ${icon("arrow")}</button><p class="form-status" role="status" aria-live="polite"></p></form></section>
  </main>`;
}

function servicePage(service) {
  const iconNames = ["users", "trending", "shield", "check"];
  return `<main class="inner-page service-page">
    <section class="service-hero">
      <div class="service-hero-copy"><p class="section-kicker">BLACKCODE SERVICES</p><h1>${service.name}</h1><p>${service.hero}</p><a class="button button-primary" href="/contact">Discuss your requirement ${icon("arrow")}</a></div>
      <figure class="service-hero-image"><img src="${ASSETS}${service.images[0]}" alt="${service.name} service"><figcaption>${icon("check")}Built around measurable business value</figcaption></figure>
    </section>
    <section class="deliver-section section-wrap"><div class="deliver-copy"><p class="section-kicker">WHAT WE DELIVER</p><h2>${service.deliverTitle}</h2><p>${service.deliverIntro}</p></div><div class="deliver-list">${service.deliver.map((item) => `<article>${icon("check")}<span>${item}</span></article>`).join("")}</div></section>
    <section class="service-pillars section-wrap">${[["Designed around users", "Clear journeys for daily use."], ["Focused on outcomes", "Useful activity visibility."], ["Ready to perform", "Reliable, scalable foundations."], ["Built with care", "Thoughtful quality checks."]].map(([title, text], index) => `<article>${icon(iconNames[index])}<div><strong>${title}</strong><span>${text}</span></div></article>`).join("")}</section>
    <section class="why-section section-wrap"><div class="why-copy"><p class="section-kicker">WHY IT MATTERS</p><h2>${service.whyTitle}</h2><p>${service.why}</p><ul>${service.benefits.map((benefit) => `<li>${icon("check")}${benefit}</li>`).join("")}</ul></div><div class="why-graphic"><span>${service.tag}</span><div class="graphic-orbit"></div><div class="graphic-core">BC</div><small>BUILT AROUND YOUR VISION</small></div></section>
    <section class="approach-section section-wrap"><p class="section-kicker">OUR APPROACH</p><h2>A clear path from requirement to release.</h2><div class="approach-grid">${service.steps.map((step, index) => `<article><span>0${index + 1}</span><p>${step}</p></article>`).join("")}</div><div class="focus-banner"><span>IMPLEMENTATION FOCUS</span><strong>${service.focus}</strong></div></section>
    <section class="work-together section-wrap"><div class="work-copy"><p class="section-kicker">WORKING TOGETHER</p><h2>How we work on ${service.workflow}.</h2><a href="/contact">Start a conversation ${icon("arrow")}</a></div><div class="work-list">${service.practices.map(([title, text], index) => `<article><span>0${index + 1}</span><div><h3>${title}</h3><p>${text}</p></div></article>`).join("")}</div><img class="process-image" src="${ASSETS}${service.images[1]}" alt="${service.implementationAlt}" loading="lazy"></section>
    <section class="service-cta"><p>Have a ${service.workflow} requirement?</p><a href="/contact">Start a conversation ${icon("arrow")}</a></section>
  </main>`;
}

function notFoundPage() {
  return `<main class="not-found"><p class="section-kicker">404 — PAGE NOT FOUND</p><h1>We couldn't find that page.</h1><a class="button button-primary" href="/">Return to homepage ${icon("arrow")}</a></main>`;
}

function isValidEmail(value) {
  const parts = value.trim().split("@");
  if (parts.length !== 2) return false;
  const [local, domain] = parts;
  const localPartPattern = /^[A-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Z0-9!#$%&'*+/=?^_`{|}~-]+)*$/i;
  const domainPattern = /^(?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\.)+(?:[A-Z]{2,63}|xn--[A-Z0-9-]{1,59}[A-Z0-9])$/i;
  return local.length <= 64 && domain.length <= 253 && localPartPattern.test(local) && domainPattern.test(domain);
}

function getFieldError(field) {
  const value = field.value.trim();
  if (field.required && !value) return "This field is required.";
  if (!value) return "";
  if (field.name === "email" && !isValidEmail(value)) return "Enter a valid email address, such as name@domain.com.";
  if (field.name === "phone" && !/^[6-9]\d{9}$/.test(value)) return "Enter a 10-digit Indian mobile number starting with 6, 7, 8 or 9.";
  if (field.name === "experience") {
    const experience = Number(value);
    if (field.validity.badInput || !/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(value) || !Number.isFinite(experience) || experience < 0 || experience > 60) {
      return "Enter experience from 0 to 60 years.";
    }
  }
  if (field.name === "expSalary" && (field.validity.badInput || !/^(?:\d+(?:\.\d*)?|\.\d+)$/.test(value) || !Number.isFinite(Number(value)) || Number(value) < 0)) {
    return "Enter a non-negative numeric salary in INR.";
  }
  return "";
}

function validateField(field) {
  const error = getFieldError(field);
  const label = field.closest("label");
  const message = label?.querySelector(".field-error");
  field.setAttribute("aria-invalid", String(Boolean(error)));
  if (message) {
    message.id = `${field.form.dataset.form}-${field.name}-error`;
    field.setAttribute("aria-describedby", message.id);
    message.textContent = error;
  }
  return !error;
}

function validateForm(form) {
  const fields = [...form.querySelectorAll("input:not([type='file']), select, textarea")];
  return fields.map(validateField).every(Boolean);
}

function setFormStatus(form, message, isError = false) {
  const status = form.querySelector(".form-status");
  status.textContent = message;
  status.classList.toggle("status-error", isError);
}

function bindInteractions() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
    menuToggle.innerHTML = icon(expanded ? "menu" : "close");
    navigation?.classList.toggle("nav-open", !expanded);
  });

  const servicesToggle = document.querySelector(".services-toggle");
  const servicesDropdown = document.querySelector(".services-dropdown");
  servicesToggle?.addEventListener("click", () => {
    const expanded = servicesToggle.getAttribute("aria-expanded") === "true";
    servicesToggle.setAttribute("aria-expanded", String(!expanded));
    servicesDropdown?.classList.toggle("dropdown-open", !expanded);
  });

  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.querySelectorAll("input:not([type='file']), select, textarea").forEach((field) => {
      field.addEventListener("input", () => {
        validateField(field);
        setFormStatus(form, "");
      });
      field.addEventListener("change", () => validateField(field));
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const selectedFileInput = form.querySelector('input[type="file"]');
      if (selectedFileInput?.dataset.invalid === "true") {
        setFormStatus(form, "Choose a supported resume file no larger than 10 MB before continuing.", true);
        selectedFileInput.focus();
        return;
      }
      if (!validateForm(form)) {
        setFormStatus(form, "Please correct the highlighted fields before continuing.", true);
        form.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }

      const isCareer = form.dataset.form === "career";
      const formData = new FormData(form);
      const file = isCareer ? formData.get("resume") : null;
      const lines = [...formData.entries()]
        .filter(([key, value]) => key !== "resume" && typeof value === "string" && value.trim())
        .map(([key, value]) => `${key}: ${value}`);
      const subject = isCareer ? "BlackCode career application" : "BlackCode project enquiry";
      let message = "Your email app should open with the details. The enquiry is sent only after you review and send the email.";
      if (file instanceof File) {
        lines.push(`Resume selected: ${file.name}`);
        message += " The resume cannot be uploaded automatically here; attach the selected file to the email before sending.";
      }
      const mailto = `mailto:info@blackcode.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
      setFormStatus(form, message);
      window.location.href = mailto;
    });
  });

  const fileInput = document.querySelector(".file-input");
  fileInput?.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    const name = fileInput.closest(".upload-box")?.querySelector(".file-name");
    if (!name) return;
    if (!file) {
      name.textContent = "No file chosen";
      name.classList.remove("status-error");
      return;
    }
    const allowedExtension = /\.(pdf|doc|docx)$/i.test(file.name);
    const allowedMimeTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const allowedMimeType = !file.type || allowedMimeTypes.includes(file.type);
    if (!allowedExtension || !allowedMimeType || file.size > 10 * 1024 * 1024) {
      fileInput.value = "";
      fileInput.dataset.invalid = "true";
      name.textContent = "Choose a PDF, DOC or DOCX file no larger than 10 MB.";
      name.classList.add("status-error");
      return;
    }
    fileInput.dataset.invalid = "false";
    name.textContent = file.name;
    name.classList.remove("status-error");
  });
}

function render() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const service = services.find((item) => routeFor(item.slug) === path);
  const pages = {
    "/": homePage,
    "/about": aboutPage,
    "/contact": contactPage,
    "/careers": careersPage,
  };
  const page = pages[path]?.() ?? (service ? servicePage(service) : notFoundPage());
  document.querySelector("#app").innerHTML = `${header()}${page}${footer()}`;
  document.title = path === "/"
    ? "BlackCode | Websites, Software & SaaS Development"
    : path === "/about"
      ? "About Us | BlackCode"
      : path === "/contact"
        ? "Contact Us | BlackCode"
        : path === "/careers"
          ? "Careers | BlackCode"
          : service
            ? `${service.name} | BlackCode`
            : "Page not found | BlackCode";
  bindInteractions();
  if (window.location.hash) {
    requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
  } else {
    window.scrollTo(0, 0);
  }
}

window.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  const href = link.getAttribute("href");
  if (!href || link.target === "_blank" || link.origin !== window.location.origin || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return;
  event.preventDefault();
  const targetUrl = new URL(link.href, window.location.origin);
  if (window.location.pathname !== targetUrl.pathname || window.location.search !== targetUrl.search) {
    window.history.pushState(null, "", href);
    render();
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

window.addEventListener("popstate", render);

render();