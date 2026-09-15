# Sample Form Data

Copy-paste values for manually testing every form on the site. Each set is
valid against its zod schema — filling a form exactly as listed should reach the
success screen with no validation errors.

**Before you start**

- Every service form ends with an **Agreement / disclaimer checkbox** that must
  be ticked. It is required even though it is not listed as a field below.
- **File uploads are optional everywhere.** Leave them empty unless you are
  specifically testing UploadThing.
- Phone numbers must be **E.164** — a leading `+`, country code, no spaces or
  dashes. `+233241234567` works; `0241234567` and `+233 24 123 4567` do not.
- Every URL field needs a full scheme (`https://…`), not a bare domain.
- Submitting for real sends mail to the IMHO inbox and a confirmation to the
  address you enter, so use an address you control.

---

## 1. Custom Engineering & Factory Solutions (Tier 1)

`/services/custom-engineering`

| Field                                         | Value                                                                                                                                                                                                                 |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Organization / Client Name                    | `AgroTech Processing Solutions Ltd`                                                                                                                                                                                   |
| Contact Person & Title                        | `Don Chris, Operations Director`                                                                                                                                                                                      |
| Email Address                                 | `don.chris@agrotechsolutions.com`                                                                                                                                                                                     |
| Phone Number                                  | `+233241234567`                                                                                                                                                                                                       |
| Physical Address / Project Site Location      | `Plot 14, Kumasi Industrial Area, Ashanti Region, Ghana`                                                                                                                                                              |
| What scale of engineering support             | ☑ **Process / Factory Design**                                                                                                                                                                                        |
| Project Title / Name                          | `Cassava Flour Processing Line — Phase 1`                                                                                                                                                                             |
| Primary Objective / Problem to Solve          | `We currently process cassava into flour manually, which caps us at roughly 200kg per day and produces inconsistent particle size. We need a semi-automated line that lifts throughput and holds a consistent grade.` |
| Material                                      | `Fresh cassava tubers, 60-70% moisture content, bulk density approx. 650 kg/m3, delivered unwashed with soil and occasional stones.`                                                                                  |
| Energy & Information                          | `Three-phase 415V grid supply with a 60kVA diesel generator as backup. We want moisture and temperature sensors logged to a dashboard the supervisor can read.`                                                       |
| What exactly must happen to the raw material? | `Wash and destone, peel, grate into mash, dewater with a hydraulic press, granulate, flash dry to 10% moisture, mill, then sieve to a uniform 250 micron grade before bagging.`                                       |
| Final Product & Target Throughput             | `Food-grade cassava flour at 250 micron, bagged in 50kg sacks. Target 500kg/hr sustained over a 10-hour shift.`                                                                                                       |
| By-products (Optional)                        | `Peel waste and press water. We would like the peels diverted for livestock feed rather than dumped.`                                                                                                                 |
| Human System (Optional)                       | `Six operators per shift with basic technical training. Only one supervisor has formal engineering background, so controls need to be simple.`                                                                        |
| Active Environment (Optional)                 | `Existing covered shed, 18m x 12m with 5m clearance. Open sides, humid, dusty during harmattan.`                                                                                                                      |
| Budget Expectations (Optional)                | `GHS 850,000 - 1,200,000 for equipment and installation`                                                                                                                                                              |
| Target Delivery Timeline (Optional)           | `Commissioned and running by Q2 2027`                                                                                                                                                                                 |

> Alternative for **scale of support**: `Product Design`, or tick both.

---

## 2. Engineering Drafting & Digitization (Tier 3)

`/services/drafting-digitization`

| Field                                    | Value                                                                                                                                                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Organization / Client Name               | `MiningPro Equipment Services`                                                                                                                                                                                         |
| Contact Person & Title                   | `Akosua Mensah, Maintenance Lead`                                                                                                                                                                                      |
| Email Address                            | `akosua.mensah@miningpro.com`                                                                                                                                                                                          |
| Phone Number                             | `+233551234567`                                                                                                                                                                                                        |
| Physical Address / Project Site Location | `Tarkwa Mine Site, Workshop B, Western Region, Ghana`                                                                                                                                                                  |
| Input Material Type                      | **Physical Part / Machine**                                                                                                                                                                                            |
| Asset Condition / Description            | `A gearbox housing from a 1998 conveyor drive. The original manufacturer is out of business and no drawings survive. The casting is intact but has surface corrosion and one repaired crack near the mounting flange.` |
| Drafting Services Required               | ☑ **3D Solid Modeling (STEP/IGES)** ☑ **2D Manufacturing Drawings (GD&T)**                                                                                                                                             |
| End Goal / Primary Use Case              | `Local re-manufacture of a spare housing`                                                                                                                                                                              |
| Drafting Standard                        | **ISO**                                                                                                                                                                                                                |
| Preferred Output Formats                 | ☑ **PDF** ☑ **STEP** ☑ **DWG**                                                                                                                                                                                         |

> **Input Material Type** alternatives: `Legacy 2D Drawings/PDFs`,
> `Hand Sketches / Concepts`, `Existing 3D Models`.
> **Drafting Standard** alternatives: `ASME`, `No Preference`.

---

## 3. Apply to IMHO GEN Academy

`/services/imho-gen-academy`

| Field                                     | Value                                                                                                                                                                                                |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full Name                                 | `Ama Serwaa Boateng`                                                                                                                                                                                 |
| Phone Number (WhatsApp Preferred)         | `+233201234567`                                                                                                                                                                                      |
| Email Address                             | `ama.boateng@example.com`                                                                                                                                                                            |
| Country                                   | **Ghana**                                                                                                                                                                                            |
| City/Town                                 | `Kumasi`                                                                                                                                                                                             |
| Current Status                            | **Engineering Student**                                                                                                                                                                              |
| Current Level / Year (Optional)           | **Level 300**                                                                                                                                                                                        |
| Institution / Company                     | `Kwame Nkrumah University of Science and Technology`                                                                                                                                                 |
| Program / Discipline / Role               | `BSc Mechanical Engineering`                                                                                                                                                                         |
| Why do you want to join?                  | `My degree has given me the theory but almost no practice at turning a requirement into a manufacturable design. I want structured reps at real engineering execution before I graduate.`            |
| Which areas interest you most?            | ☑ **Engineering Design** ☑ **CAD Modeling** ☑ **Product Development**                                                                                                                                |
| Worked on projects before?                | **Yes**                                                                                                                                                                                              |
| Portfolio Link (Optional)                 | `https://github.com/amaserwaa/design-portfolio`                                                                                                                                                      |
| Willing to go through intensive training? | **Yes**                                                                                                                                                                                              |
| Weekly hours commitment                   | **10–20 hours**                                                                                                                                                                                      |
| Why should we select you?                 | `I finish what I start. I led the chassis subteam for our university's Formula Student car and delivered the full CAD package on schedule. I want to be pushed harder than my coursework pushes me.` |

> **Current Status** alternatives: `SHS Student`, `Graduate`, `Post Graduate`,
> `National Service Personnel`, `Engineer`, `Technical Professional`,
> `Builder / Innovator`, `Other`.
> **Weekly hours** alternatives: `Less than 5 hours`, `5–10 hours`, `20+ hours`
> — note the en-dash in `5–10 hours`.

---

## 4. Engineering Design Capability Assessment

`/services/capability-assessment`

| Field                                            | Value                                                                                                                                                                                                     |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full Name                                        | `Kwabena Osei`                                                                                                                                                                                            |
| Email Address                                    | `kwabena.osei@example.com`                                                                                                                                                                                |
| Current Background                               | **Graduate**                                                                                                                                                                                              |
| Experience Level                                 | **Intermediate**                                                                                                                                                                                          |
| Ability to define engineering problems           | **3**                                                                                                                                                                                                     |
| Ability to generate engineering concepts         | **4**                                                                                                                                                                                                     |
| CAD modeling capability                          | **4**                                                                                                                                                                                                     |
| Engineering analysis/calculation capability      | **2**                                                                                                                                                                                                     |
| Technical documentation ability                  | **3**                                                                                                                                                                                                     |
| Manufacturing understanding                      | **2**                                                                                                                                                                                                     |
| Systems thinking ability                         | **3**                                                                                                                                                                                                     |
| Describe a project or problem you have worked on | `I designed a solar-powered maize dryer for a farming cooperative. I sized the collector area and modelled the frame in Fusion 360, but I underestimated airflow and the first prototype dried unevenly.` |
| What do you want to improve most?                | `Engineering analysis. I can produce geometry that looks right, but I struggle to prove it will perform before it is built.`                                                                              |
| Your biggest engineering weakness                | `I jump to CAD too early. I start modelling before I have properly defined constraints, so I end up reworking geometry that was never going to satisfy the requirement.`                                  |
| Portfolio Link (Optional)                        | `https://grabcad.com/kwabena.osei`                                                                                                                                                                        |

> All seven ratings are required and must be **1–5**. Backgrounds available:
> `SHS Student`, `Engineering Student`, `Graduate`, `National Service Personnel`,
> `Engineer`, `CAD Designer`, `Technical Professional`, `Builder / Innovator`,
> `Other`. Experience levels: `Basic`, `Intermediate`, `Advanced`,
> `Professional`.

---

## 5. Join the Design Forge Community

`/services/design-forge`

| Field                                   | Value                                                                                                                                                            |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full Name                               | `Nana Yaa Asantewaa`                                                                                                                                             |
| Email Address                           | `nanayaa@example.com`                                                                                                                                            |
| Phone Number (WhatsApp Preferred)       | `+233261234567`                                                                                                                                                  |
| Institution / Company                   | `Bluewave Fabrication Ltd`                                                                                                                                       |
| Current Role / Discipline               | **Mechanical Engineer**                                                                                                                                          |
| What are you interested in?             | ☑ **Engineering Design** ☑ **CAD & 3D Modeling** ☑ **Robotics & Automation**                                                                                     |
| Interested in mentorship opportunities? | **Yes**                                                                                                                                                          |
| Interested in collaborations/projects?  | **Yes**                                                                                                                                                          |
| Interested in challenges/workshops?     | **No**                                                                                                                                                           |
| LinkedIn Profile (Optional)             | `https://www.linkedin.com/in/nanayaa-asantewaa`                                                                                                                  |
| Portfolio / Project Link (Optional)     | `https://nanayaa.design`                                                                                                                                         |
| Social Handle (Optional)                | `@nanayaa.builds`                                                                                                                                                |
| Why do you want to join?                | `I work alone on most of my builds and I want a room of people who will tell me when my design is wrong. Mentorship and technical critique are what I am after.` |

> **Current Role** alternatives: `Engineering Student`, `Graduate Engineer`,
> `Electrical Engineer`, `CAD Designer`, `Product Designer`,
> `Fabricator / Technician`, `Builder / Innovator`, `Entrepreneur`,
> `Researcher`, `Technical Professional`, `Other`.

---

## 6. Partner With IMHO GEN Academy

`/services/academy-partnership`

| Field                             | Value                                                                                                                                                                                                     |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Organization Name                 | `Volta Industrial Group`                                                                                                                                                                                  |
| Organization Website (Optional)   | `https://www.voltaindustrial.com`                                                                                                                                                                         |
| Contact Person                    | `Selorm Adzah`                                                                                                                                                                                            |
| Position / Role                   | `Head of Talent Development`                                                                                                                                                                              |
| Email Address                     | `selorm.adzah@voltaindustrial.com`                                                                                                                                                                        |
| Phone Number (Optional)           | `+233302123456`                                                                                                                                                                                           |
| Areas of partnership interest     | ☑ **Engineering Training Programs** ☑ **Workforce Development** ☑ **Internship & Placement Programs**                                                                                                     |
| What you want to collaborate on   | `We hire roughly twenty junior engineers a year and spend the first six months teaching them practical design work. We would rather co-design a pipeline with the Academy so graduates arrive job-ready.` |
| Expected outcomes (Optional)      | `A structured intake pipeline, and a measurable drop in time-to-productivity for new engineering hires.`                                                                                                  |
| Additional information (Optional) | `We can offer workshop access and equipment for practical sessions at our Tema facility.`                                                                                                                 |

> Other interest options: `Research & Innovation`, `Sponsorship Opportunities`,
> `Community Programs`, `Technical Challenges / Competitions`,
> `Industrial Projects`, `Engineering Design Capability Development`,
> `Technical Ecosystem Development`, `Product Development Collaboration`.

---

## 7. Support Engineering Capability Development

`/services/academy-support`

| Field                                       | Value                                                                                                                                                                    |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Full Name                                   | `Yaw Darko`                                                                                                                                                              |
| Email Address                               | `yaw.darko@example.com`                                                                                                                                                  |
| Country                                     | **Ghana**                                                                                                                                                                |
| Donation / Support Type                     | ☑ **Monthly Support** ☑ **Student Scholarship Support**                                                                                                                  |
| What should your support contribute toward? | `I would like my contribution to cover tuition for students who cannot otherwise afford the programme, with a preference for applicants from rural senior high schools.` |

> Other support types: `One-Time Donation`, `Equipment Donation`,
> `Infrastructure Support`, `Community Program Support`, `Corporate Support`,
> `Other`.

---

## 8. Sponsor an Engineering Capability Cohort

`/services/cohort-sponsorship`

| Field                                | Value                                                                                                                                                                                    |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Organization Name                    | `Accra Manufacturing Holdings`                                                                                                                                                           |
| Website (Optional)                   | `https://www.accramanufacturing.com`                                                                                                                                                     |
| Contact Person                       | `Efua Bonsu`                                                                                                                                                                             |
| Position / Role                      | `Director of Corporate Affairs`                                                                                                                                                          |
| Email Address                        | `efua.bonsu@accramanufacturing.com`                                                                                                                                                      |
| Phone Number (Optional)              | `+233303987654`                                                                                                                                                                          |
| Type of sponsorship                  | ☑ **Full Cohort Sponsorship** ☑ **Female Engineering Sponsorship**                                                                                                                       |
| Why is your organization interested? | `Our sector cannot recruit enough engineers who can actually design for manufacture. Funding a cohort is a more direct fix than another scholarship cheque with no curriculum attached.` |
| What outcomes matter most?           | `Number of engineers trained and placed, the share of women completing the programme, and evidence of designs that reached production.`                                                  |
| Schedule a sponsorship discussion?   | **Yes**                                                                                                                                                                                  |

> Other sponsorship areas: `Partial Cohort Sponsorship`,
> `Student Scholarship Support`, `Engineering Equipment Sponsorship`,
> `Workforce Development Partnership`, `Community Engineering Programs`,
> `Innovation & Technical Challenges`, `Infrastructure Support`.

---

## 9. Footer Contact Form

Appears at the bottom of every page.

| Field                  | Value                                                                                                                                                 |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full Name              | `Kofi Antwi`                                                                                                                                          |
| Email                  | `kofi.antwi@example.com`                                                                                                                              |
| Message                | `I would like to discuss a custom conveyor system for our bottling line. What does your intake process look like and what is your typical lead time?` |
| File upload (Optional) | —                                                                                                                                                     |

---

## Deliberately invalid values

Useful for checking that validation still fires and that the page scrolls to the
first bad field.

| Field type   | Bad value            | Expected message                                       |
| ------------ | -------------------- | ------------------------------------------------------ |
| Phone        | `0241234567`         | Phone number must be in E.164 format with country code |
| Phone        | `+233 24 123 4567`   | same — spaces are rejected                             |
| Email        | `not-an-email`       | Please enter a valid email address                     |
| URL          | `github.com/someone` | Please enter a valid URL — a bare domain is rejected   |
| Long text    | `too short`          | … must be at least 10 characters long                  |
| Multi-select | none ticked          | Please select at least one …                           |
| Agreement    | unticked             | You must agree to the terms of agreement               |
