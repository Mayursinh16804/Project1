// Comprehensive AC FAQ dataset - 52+ entries
// This data is embedded for offline availability and fast responses

export interface FAQEntry {
  id: string;
  category: string;
  canonical_question: string;
  question_variations: string[];
  short_answer: string;
  long_answer: string;
  tags: string[];
  safety?: string;
  follow_up?: string[];
  source_references?: string[];
}

export const AC_FAQ_DATABASE: FAQEntry[] = [
  {
    id: "troubleshooting-not-cooling-001",
    category: "troubleshooting",
    canonical_question: "Why is my AC running but not cooling?",
    question_variations: [
      "My AC is running but not cooling the room",
      "AC is on but not blowing cold air",
      "Why is my air conditioner not cooling?",
      "AC runs but doesn't lower the temperature",
      "Room feels warm even though AC is on",
      "Air conditioner running but air is warm",
      "AC works but not cooling properly",
      "My split AC won't cool the room",
    ],
    short_answer:
      "Common causes: dirty/blocked filter, incorrect thermostat mode, low refrigerant (leak), dirty condenser coils, blocked vents, or a faulty compressor. Check filters and thermostat first and call a technician if refrigerant or compressor issues are suspected.",
    long_answer:
      "1) Verify thermostat is set to 'cool' and temperature lower than room. 2) Inspect/replace/clean indoor air filter — a clogged filter reduces cooling. 3) Check that supply vents are open and unblocked. 4) Inspect outdoor condenser for debris and clean fins. 5) Look for ice on evaporator coils (freeze suggests refrigerant/airflow issue). 6) If airflow is low or warm air persists after steps 1–4, suspect low refrigerant (requires certified technician) or compressor failure. Always turn off power before inspecting components and call a professional for refrigerant handling or compressor/electrical repairs.",
    tags: ["ac", "not-cooling", "filter", "refrigerant", "compressor"],
    safety:
      "Do not attempt refrigerant recharging or compressor repairs yourself — refrigerants and pressure systems are hazardous and require certified technicians.",
    follow_up: [
      "How do I clean the air filter?",
      "When should I call a technician?",
    ],
    source_references: [
      "https://www.carrier.com/residential/en/us/products/air-conditioners/air-conditioner-service/ac-not-blowing-cold-air/",
      "https://www.daikin.com/products/ac/services/troubleshooting/",
    ],
  },
  {
    id: "maintenance-clean-filter-002",
    category: "maintenance",
    canonical_question: "How do I clean my air conditioner filter?",
    question_variations: [
      "How to clean AC filter?",
      "Cleaning air conditioner filter steps",
      "Best way to wash AC filter",
      "My AC filter is dirty — how to clean it?",
      "Can I rinse my AC filter with water?",
      "How often should I clean the AC filter?",
      "AC filter maintenance guide",
      "Steps to clean split AC filter",
    ],
    short_answer:
      "Turn off power, remove the filter, vacuum loose dust, rinse with lukewarm water (or soak briefly with mild detergent if washable), air dry completely before reinstalling. Clean monthly in dusty conditions.",
    long_answer:
      "1) Turn off and unplug the unit (safety first). 2) Open the front panel and remove the filter(s). 3) Vacuum both sides to remove loose dust. 4) If washable, rinse under a gentle stream of lukewarm water; for heavy dirt, soak 10–15 minutes in warm water with mild detergent, then rinse. 5) Shake off excess water and air dry completely (30+ minutes) before reinstalling. 6) Replace disposable filters per manufacturer's schedule (usually 3–12 months). Regular cleaning improves airflow and efficiency.",
    tags: ["filter", "maintenance", "cleaning", "split-ac", "window-ac"],
    safety:
      "Always ensure the unit is powered off to avoid electrical hazard. Do not reinstall a wet filter until fully dry to prevent mold.",
    follow_up: [
      "What type of filter does my AC use?",
      "How often should I replace the filter?",
    ],
    source_references: [
      "https://www.tcl.com/in/en/blog/tips/how-to-clean-air-conditioner-filter",
    ],
  },
  {
    id: "diagnose-refrigerant-leak-003",
    category: "safety",
    canonical_question: "How can I tell if my AC has a refrigerant leak?",
    question_variations: [
      "Signs of refrigerant leak in AC",
      "How to identify AC freon leak",
      "My AC is hissing and not cooling — is it a leak?",
      "AC losing refrigerant symptoms",
      "How do I know if the AC refrigerant is low?",
      "Why is my AC taking too long to cool?",
      "Is low refrigerant causing my AC not to cool?",
      "AC has ice on coil — refrigerant leak?",
    ],
    short_answer:
      "Common signs: reduced cooling, hissing or bubbling noises, ice on evaporator coil, longer run cycles, and low airflow. If suspected, turn off the unit and call a certified HVAC technician — refrigerant handling is regulated.",
    long_answer:
      "1) Check vent air temperature (warm or weak airflow suggests low refrigerant). 2) Listen for hissing/bubbling at indoor/outdoor coils or lines. 3) Inspect evaporator coil for frost/ice (thick ice suggests refrigerant/airflow issue). 4) Observe unusually long cooling cycles. 5) If multiple signs appear, power down and contact a licensed technician — diagnosing and repairing refrigerant leaks requires specialized tools and EPA/region certification. Document symptoms and time observed for the technician.",
    tags: ["refrigerant", "leak", "safety"],
    safety:
      "Do not try to recharge refrigerant yourself — it's dangerous and often illegal without certification. Refrigerant exposure can cause health issues.",
    follow_up: [
      "How much does refrigerant recharge cost?",
      "How long can I run AC with a small leak?",
    ],
    source_references: [
      "https://www.lennox.com/residential/lennox-life/consumer/how-to-identify-an-ac-refrigerant-leak",
    ],
  },
  {
    id: "noisy-ac-causes-004",
    category: "troubleshooting",
    canonical_question: "Why is my AC making loud or unusual noises?",
    question_variations: [
      "AC making loud noise what to do",
      "Why does my air conditioner rattle and bang?",
      "AC screeching noise causes",
      "My AC is vibrating and noisy",
      "Compressor making noise in AC",
      "Fan making grinding noise AC",
      "AC buzzing or humming sounds",
      "Why does outdoor AC make loud noise?",
    ],
    short_answer:
      "Noises often come from loose parts, failing fan motor, debris in condenser, worn bearings, or compressor issues. Tighten panels, clear debris, and call a technician for motor/compressor repairs.",
    long_answer:
      "1) Identify noise source (indoor vs outdoor). 2) For rattling — check for loose panels, screws, or debris; tighten if safe. 3) For screeching or grinding — blower or fan motor bearings may be failing (turn off and call technician). 4) Banging can indicate broken fan blade or failing compressor internals (stop unit and call professional). 5) For unusual vibration, check mounting and insulation. 6) Regular maintenance (cleaning coils and tightening hardware) prevents many noise issues. If you hear loud bangs or metallic sounds, power down and seek professional service to avoid damage.",
    tags: ["noise", "fan", "compressor", "maintenance"],
    safety:
      "Loud bangs or smells with noise may indicate severe internal damage—turn off the unit and disconnect power before inspection.",
    follow_up: [
      "How to quiet a window AC?",
      "When to replace the compressor?",
    ],
    source_references: [
      "https://www.wmhendersoninc.com/blog/bad-noises-coming-from-your-air-conditioner/",
    ],
  },
  {
    id: "water-leak-404",
    category: "troubleshooting",
    canonical_question: "Why is water leaking from my AC indoor unit?",
    question_variations: [
      "AC leaking water inside",
      "Water dripping from split AC",
      "Why is my air conditioner leaking water indoors?",
      "AC condensate drain leaking",
      "My AC has water pooling under it",
      "Water coming out of AC unit",
      "Why is my AC leaking from the indoor unit?",
      "What to do if AC leaking water?",
    ],
    short_answer:
      "Common causes: clogged condensate drain line, dirty filter reducing airflow and causing coil freeze then melt, or disconnected/blocked drain pan. Clear the drain and clean the filter; call technician if plumbing or pan is damaged.",
    long_answer:
      "1) Turn off power. 2) Check and clean the air filter (restricted airflow can freeze coils). 3) Inspect condensate drain line for clogs — use a wet-dry vacuum at the outdoor drain outlet to clear. 4) Check drain pan for cracks or holes; replace if damaged. 5) For persistent leaks, call an HVAC technician — they can inspect piping and condensation pump (if present). Regular maintenance reduces clogging.",
    tags: ["water-leak", "condensate", "maintenance"],
    safety:
      "Shut off power before inspecting internal components. Water + electricity is hazardous.",
    follow_up: [
      "How do I clear a clogged AC drain line?",
      "Is a leaking AC covered under warranty?",
    ],
    source_references: [],
  },
  {
    id: "thermostat-issues-006",
    category: "troubleshooting",
    canonical_question: "Why won't the thermostat turn the AC on or reach temperature?",
    question_variations: [
      "AC thermostat not working",
      "Thermostat won't switch to cool",
      "Why is my thermostat not responding to AC?",
      "AC not turning on from thermostat",
      "Thermostat shows wrong temperature",
      "AC short-cycles from thermostat",
      "How to fix thermostat control AC",
      "Why is my thermostat not calling for cooling?",
    ],
    short_answer:
      "Check thermostat mode (Cool), batteries (if battery-powered), correct setpoint, and wiring/placement (avoid direct sunlight). If settings are correct and AC still doesn't respond, the thermostat or control board may be faulty — call technician.",
    long_answer:
      "1) Ensure thermostat is set to 'Cool' and temperature set below current room temp. 2) Replace batteries in battery-powered thermostats. 3) Confirm the thermostat is not in 'Fan on' mode only. 4) Check location — avoid mounting on heat sources or in direct sun. 5) If unit short-cycles or shows incorrect readings, verify wiring and check for error codes. For smart thermostats, confirm Wi-Fi integration and firmware. If problem persists, consult a professional to test the thermostat and AC control circuits.",
    tags: ["thermostat", "control", "settings", "smart-thermostat"],
    safety: "",
    follow_up: [
      "How do I reset my thermostat?",
      "Why does my AC short-cycle?",
    ],
    source_references: [
      "https://www.daikin.com/products/ac/services/troubleshooting/",
    ],
  },
  {
    id: "energy-saving-tips-007",
    category: "general",
    canonical_question: "How can I reduce AC energy consumption and bills?",
    question_variations: [
      "How to save energy with AC",
      "Reduce electricity bill from air conditioner",
      "AC energy saving tips",
      "Best temperature to set AC for efficiency",
      "How to make AC more efficient",
      "Should I set thermostat higher to save energy?",
      "AC maintenance to lower bills",
      "How to improve AC efficiency",
    ],
    short_answer:
      "Set thermostat to 24–26°C (75–78°F) when home, raise when away, regularly clean/replace filters, ensure condenser is clear, and use ceiling fans to allow higher setpoints. Schedule annual maintenance and consider a programmable or smart thermostat.",
    long_answer:
      "1) Use a programmable thermostat to raise setpoint while away. 2) Clean filters monthly and coils yearly. 3) Shade outdoor condenser and keep clear of debris. 4) Seal windows and doors and insulate ducts. 5) Use fans to circulate air and allow higher setpoints. 6) Consider upgrade to energy-efficient models (inverter technology) if older unit is inefficient. Regular preventive maintenance reduces energy waste.",
    tags: ["energy-saving", "efficiency", "thermostat", "maintenance"],
    safety: "",
    follow_up: [
      "What's the ideal thermostat setting?",
      "Does servicing improve efficiency?",
    ],
    source_references: [],
  },
  {
    id: "installation-sizing-008",
    category: "installation",
    canonical_question: "How do I choose the right AC size for my room?",
    question_variations: [
      "What size AC do I need for my room?",
      "BTU calculation for AC",
      "How many tons of AC for a 12x15 room?",
      "Choosing AC capacity for home",
      "AC sizing guide",
      "How to calculate AC tonnage by room size",
      "What capacity split AC for living room?",
      "Room size vs AC capacity",
    ],
    short_answer:
      "AC capacity depends on room area, ceiling height, occupancy, sun exposure, and insulation. As a rough rule, allow about 20 BTU per sq ft — but get a professional load calculation (Manual J) for accuracy.",
    long_answer:
      "1) Estimate room area (length × width). 2) Base rule: ~20 BTU per square foot as a starting point. 3) Adjust for high ceilings, large windows, direct sun (increase capacity), and shaded or well-insulated areas (reduce). 4) Consider occupancy and heat-generating appliances. 5) For precise sizing use a duct/room load calculation (Manual J) performed by a qualified HVAC contractor — over/undersizing both cause problems (short-cycling or underperformance).",
    tags: ["installation", "sizing", "btus", "capacity"],
    safety: "",
    follow_up: [
      "What's Manual J calculation?",
      "Can I install a smaller AC and still be okay?",
    ],
    source_references: [],
  },
  {
    id: "split-ac-inverter-009",
    category: "general",
    canonical_question: "What is an inverter AC and how is it different from non-inverter?",
    question_variations: [
      "Inverter vs non-inverter AC difference",
      "What does inverter AC mean?",
      "Are inverter ACs more efficient?",
      "Benefits of inverter air conditioner",
      "Why choose inverter AC",
      "How does inverter technology save energy?",
      "Is inverter AC better for home?",
      "Inverter compressor vs fixed speed",
    ],
    short_answer:
      "Inverter ACs vary compressor speed to maintain temperature continuously, improving efficiency, reducing energy spikes, and providing steadier comfort. Non-inverter ACs use fixed-speed compressors that cycle on/off. Inverter units typically cost more upfront but save energy over time.",
    long_answer:
      "1) Inverter technology adjusts compressor frequency to match cooling demand, avoiding on/off cycles. 2) This reduces energy consumption, lowers noise, and improves temperature stability. 3) For homes with variable cooling needs, inverter units run longer at lower power consumption, offering better efficiency. 4) Consider local electricity costs and duty cycle when deciding; maintenance and proper sizing remain important for longevity.",
    tags: ["inverter", "split-ac", "efficiency"],
    safety: "",
    follow_up: [
      "Do inverter ACs need different maintenance?",
      "Are inverter ACs more expensive to repair?",
    ],
    source_references: [],
  },
  {
    id: "brand-carrier-specific-010",
    category: "brand-specific",
    canonical_question: "Are there Carrier-specific troubleshooting steps for AC not cooling?",
    question_variations: [
      "Carrier AC not cooling what to check",
      "Troubleshoot Carrier air conditioner",
      "Carrier split AC blowing warm air",
      "Carrier unit running but not cold",
      "How to diagnose Carrier AC issues",
      "Carrier AC troubleshooting guide",
      "Carrier HVAC not cooling tips",
      "Carrier AC service steps",
    ],
    short_answer:
      "Carrier recommends checking air filter cleanliness, thermostat settings, indoor coil frost, outdoor condenser obstructions, and contacting a Carrier dealer for refrigerant or compressor issues. Follow Carrier's troubleshooting checklist before calling service.",
    long_answer:
      "Follow Carrier's official guidance: 1) Verify thermostat mode and setpoint. 2) Check air filter and replace/clean as needed. 3) Ensure vents & registers are open and unobstructed. 4) Inspect outdoor unit for debris and clean coils. 5) Look for frozen indoor coils which indicate airflow or refrigerant issues. 6) If basic checks fail, contact a certified Carrier dealer for diagnostics and repairs.",
    tags: ["carrier", "troubleshooting", "brand"],
    safety: "",
    follow_up: [
      "Where can I find Carrier manuals?",
      "How to contact Carrier service?",
    ],
    source_references: [
      "https://www.carrier.com/residential/en/us/products/air-conditioners/air-conditioner-service/ac-not-blowing-cold-air/",
    ],
  },
  {
    id: "brand-daikin-specific-011",
    category: "brand-specific",
    canonical_question: "What should I check first for a Daikin AC with poor performance?",
    question_variations: [
      "Daikin AC not cooling checklist",
      "Troubleshoot Daikin split AC",
      "Daikin poor cooling steps",
      "Daikin AC maintenance tips",
      "Daikin AC user troubleshooting",
      "Why is my Daikin AC not cooling",
      "Daikin AC service advice",
      "Daikin remote control settings issue",
    ],
    short_answer:
      "Daikin suggests verifying remote/thermostat settings, cleaning filters, checking for blocked airflow, and ensuring outdoor unit ventilation. If problems persist, contact Daikin service.",
    long_answer:
      "1) Confirm correct mode/temperature on remote. 2) Clean or replace filters. 3) Check for closed vents or blocked return air. 4) Verify outdoor unit is free of debris and has adequate clearance. 5) If unit displays error codes follow the manual's guidance; otherwise, contact authorized service.",
    tags: ["daikin", "brand", "troubleshooting"],
    safety: "",
    follow_up: [
      "How to read Daikin error codes?",
      "How to contact Daikin service?",
    ],
    source_references: [
      "https://www.daikin.com/products/ac/services/troubleshooting/",
    ],
  },
  {
    id: "window-ac-quieting-012",
    category: "maintenance",
    canonical_question: "How do I make my window air conditioner quieter?",
    question_variations: [
      "Quiet a noisy window AC",
      "Reduce noise from window air conditioner",
      "How to stop rattling in window AC",
      "Window AC vibration fix",
      "Tips to make window AC run quietly",
      "Best way to reduce AC noise",
      "Fix window AC noise",
      "Window unit making loud noise",
    ],
    short_answer:
      "Secure mounting, add foam insulation around gaps, tighten loose screws, clean fan and condenser, and replace worn vibration mounts. For compressor noise, consult a technician.",
    long_answer:
      "1) Ensure unit is level and securely mounted in the window to reduce vibration. 2) Seal gaps with foam or insulation to prevent rattling. 3) Tighten screws and panels. 4) Clean or replace filters and remove debris near fan blades. 5) If compressor noise persists, a service technician can inspect mounts, motor bearings, or use a sound blanket on outdoor compressors.",
    tags: ["window-ac", "noise", "maintenance"],
    safety: "",
    follow_up: [
      "Is it safe to run a noisy window AC?",
      "When to replace a window AC?",
    ],
    source_references: [
      "https://www.bhg.com/home-improvement/advice/maintenance-repair/how-to-quiet-a-noisy-window-air-conditioner/",
    ],
  },
  {
    id: "error-codes-013",
    category: "troubleshooting",
    canonical_question: "What do AC error codes mean and how do I use them?",
    question_variations: [
      "AC error code meanings",
      "How to read AC error codes",
      "Split AC showing error code what to do",
      "AC displays code E1 or F3 meaning",
      "How to troubleshoot AC error codes",
      "What does the error code on my AC remote mean",
      "AC blinking lights error code",
      "Interpreting air conditioner error codes",
    ],
    short_answer:
      "Error codes vary by brand—consult your unit's manual or the brand's troubleshooting guide for code definitions. Common codes indicate sensor faults, refrigerant issues, or communication errors.",
    long_answer:
      "1) Note the exact code and whether the indoor or outdoor unit shows it. 2) Check the brand manual for specific code explanation—many manufacturers list codes and recommended actions (reset, service, replace part). 3) For transient errors try power-cycling the unit; if persistent, contact authorized service. 4) Avoid opening sealed panels; leave high-voltage and refrigerant repairs to professionals.",
    tags: ["error-code", "diagnostics", "brand"],
    safety: "",
    follow_up: [
      "Where to find my AC manual?",
      "Should I reset after error code?",
    ],
    source_references: [
      "https://www.daikin.com/products/ac/services/troubleshooting/",
    ],
  },
  {
    id: "compressor-failure-014",
    category: "parts",
    canonical_question: "How do I know if my AC compressor has failed?",
    question_variations: [
      "Compressor not running AC",
      "AC compressor signs of failure",
      "How to test AC compressor",
      "AC humming but compressor not starting",
      "Compressor clicking and not engaging",
      "Why is compressor not turning on",
      "AC clicking noise compressor issue",
      "Compressor burned out symptoms",
    ],
    short_answer:
      "Signs: outdoor unit humming/clicking but compressor not starting, unit not cooling despite fan running, high electrical draw, or burnt smell. Compressor problems usually require replacement by a technician.",
    long_answer:
      "1) Confirm power to unit and outdoor fan operation. 2) If fan runs but compressor doesn't, listen for hum or repeated clicking (start relay issues) — a capacitor or start relay could be the fault. 3) Measure voltage and current (by technician). 4) Smell of burning or seized compressor requires immediate shutdown. 5) Compressor replacement is costly; evaluate age/life of unit before repair.",
    tags: ["compressor", "parts", "repair"],
    safety:
      "Compressor repair involves high voltage and refrigerant — do not attempt yourself.",
    follow_up: [
      "How much to replace AC compressor?",
      "Can a capacitor fix compressor start issues?",
    ],
    source_references: [],
  },
  {
    id: "capacitor-fault-015",
    category: "parts",
    canonical_question: "What does a bad capacitor do in an AC and how to diagnose?",
    question_variations: [
      "AC capacitor replacement signs",
      "AC won't start capacitor bad",
      "How to tell if AC capacitor is bad",
      "Capacitor clicking AC",
      "AC hums but won't start capacitor issue",
      "Fan not starting capacitor faulty",
      "AC condenser capacitor diagnosis",
      "Capacitor failure symptoms in AC",
    ],
    short_answer:
      "A failing capacitor can prevent the compressor or fan from starting (unit may hum or click). Technicians test capacitance with a multimeter and replace capacitors when out of spec.",
    long_answer:
      "1) Symptoms: humming noise, repeated clicking, failing to start, intermittent operation. 2) Technician inspects capacitor ratings and measures microfarads with a meter. 3) Replace capacitor with exact spec replacement; avoid DIY unless confident and qualified — capacitors store dangerous charge. 4) After replacement, test system performance and observe for proper start-up.",
    tags: ["capacitor", "parts", "diagnostics", "safety"],
    safety:
      "Capacitors hold charge; only qualified personnel should test or replace them.",
    follow_up: [
      "What size capacitor for my AC?",
      "How much does capacitor replacement cost?",
    ],
    source_references: [],
  },
  {
    id: "smell-ac-odor-016",
    category: "troubleshooting",
    canonical_question: "Why does my AC smell bad and what should I do?",
    question_variations: [
      "AC emitting bad odor",
      "Moldy smell from AC",
      "AC smells like rotten eggs or gas",
      "Chemical smell from air conditioner",
      "Why does my AC stink when turned on",
      "AC smell like burning plastic",
      "AC smells musty when turned on",
      "AC smells of mildew",
    ],
    short_answer:
      "Musty/mildew smells indicate mold in the unit or ducts (clean filters and coils). Rotten-egg smell could indicate gas leak — evacuate and call emergency services. Burning smells suggest electrical problems — turn off unit immediately.",
    long_answer:
      "1) Musty smell: clean/replace filter, inspect drain pan/lines, and consider coil cleaning; duct cleaning may be needed. 2) Rotten-egg smell: suspect natural gas — leave the building and call emergency services (do not run appliances). 3) Burning/plastic smell: power off unit and call technician — could be motor or wiring overheating. 4) For mold concerns, consider professional cleaning and use of UV lights in HVAC for prevention.",
    tags: ["smell", "mold", "safety", "odor"],
    safety:
      "Gas smells require immediate evacuation and emergency response. Electrical burning smells require immediate shutdown and professional inspection.",
    follow_up: [
      "How to clean AC coils?",
      "Is duct cleaning necessary for musty smell?",
    ],
    source_references: [
      "https://www.webmd.com/a-to-z-guides/what-is-refrigerant-poisoning",
    ],
  },
  {
    id: "maintenance-annual-service-017",
    category: "maintenance",
    canonical_question: "How often should I service my AC and what does service include?",
    question_variations: [
      "AC annual maintenance checklist",
      "How often to service air conditioner",
      "What is included in AC servicing",
      "AC yearly check-up items",
      "How to prepare AC for summer",
      "Seasonal AC maintenance tasks",
      "What does HVAC tech check during service",
      "AC preventive maintenance list",
    ],
    short_answer:
      "Service at least once a year (before cooling season). Technician checks refrigerant levels, electrical connections, condenser/evaporator coils, filter, drain lines, motor/capacitor, and thermostat calibration.",
    long_answer:
      "1) Replace/clean filters. 2) Inspect refrigerant charge & look for leaks. 3) Clean condenser & evaporator coils. 4) Verify electrical connections and test capacitors/motors. 5) Test thermostat and airflow. 6) Clear condensate drain and check drain pan. 7) Lubricate moving parts if applicable. Regular service improves efficiency and reliability.",
    tags: ["maintenance", "service", "annual"],
    safety: "",
    follow_up: [
      "How much does AC service cost?",
      "Can I service AC myself?",
    ],
    source_references: [],
  },
  {
    id: "warranty-coverage-018",
    category: "service",
    canonical_question: "Is AC repair covered under warranty and what should I check?",
    question_variations: [
      "AC warranty repair coverage",
      "Does warranty cover compressor replacement",
      "What AC repairs are under warranty",
      "Manufacturer warranty on AC units",
      "How to claim AC warranty service",
      "AC warranty what is included",
      "Is installation covered under warranty",
      "How to check AC warranty status",
    ],
    short_answer:
      "Warranty coverage differs by manufacturer and model—check your warranty booklet for parts (compressor, PCB) and labor coverage. Keep proof of purchase and service records; authorized service visits often required for warranty claims.",
    long_answer:
      "1) Locate warranty documents and serial number. 2) Determine warranty period for parts vs labor (compressor often has longer warranty). 3) Use authorized service centers to avoid voiding warranty. 4) Keep maintenance records and receipts. 5) For installation defects, contact installer and manufacturer. 6) Some warranties require product registration within a period after purchase.",
    tags: ["warranty", "service", "manufacturer"],
    safety: "",
    follow_up: [
      "How to register AC warranty?",
      "What voids AC warranty?",
    ],
    source_references: [],
  },
  {
    id: "filter-replacement-019",
    category: "maintenance",
    canonical_question: "When should I replace my AC filter instead of cleaning it?",
    question_variations: [
      "How often to replace AC filter",
      "Replace vs clean AC filter",
      "When to buy new AC filter",
      "Disposable AC filter replacement schedule",
      "Filter replacement timeline",
      "My AC filter is damaged should I replace?",
      "How long do AC filters last",
      "Signs filter needs replacement",
    ],
    short_answer:
      "Replace disposable filters per manufacturer's schedule (commonly 1–3 months). Washable/reusable filters can be cleaned but replace if torn, clogged beyond cleaning, or damaged. Frequent replacement improves airflow and indoor air quality.",
    long_answer:
      "1) Inspect filters monthly. 2) Replace disposable pleated filters every 1–3 months (more frequently in dusty environments or with pets). 3) If washable filters are torn or permanently deformed, replace. 4) A damaged filter reduces efficiency and can allow dust on coils causing long-term damage.",
    tags: ["filter", "replacement", "air-quality"],
    safety: "",
    follow_up: [
      "Which filter MERV rating should I choose?",
      "Where to buy AC filters?",
    ],
    source_references: [],
  },
  {
    id: "ductwork-issues-020",
    category: "troubleshooting",
    canonical_question: "Could ducts be causing my AC problems and how do I inspect them?",
    question_variations: [
      "AC issues from ducts",
      "Blocked air ducts symptoms",
      "Duct leak affecting AC performance",
      "How to check AC ductwork",
      "Poor airflow due to ducts",
      "Duct cleaning effect on AC",
      "Why is airflow low from vents",
      "How to find duct leaks",
    ],
    short_answer:
      "Leaky, blocked, or poorly insulated ducts can reduce airflow and cooling efficiency. Inspect accessible ducts for disconnections, blockages, and poor insulation; consider professional duct testing and sealing.",
    long_answer:
      "1) Look for cold/warm spots in rooms. 2) Inspect registers and accessible duct runs for disconnections or heavy dust accumulation. 3) Seal visible joints with mastic tape (not duct tape) and insulate ducts in unconditioned spaces. 4) For suspected major leaks, have a professional perform duct leakage testing (blower door/duct blaster). 5) Proper duct design is as crucial as correct AC sizing.",
    tags: ["ductwork", "airflow", "installation"],
    safety: "",
    follow_up: [
      "How to seal ductwork?",
      "Does duct cleaning improve efficiency?",
    ],
    source_references: [],
  },
  {
    id: "filter-fiberglass-vs-pleated-021",
    category: "maintenance",
    canonical_question:
      "What is the difference between fiberglass and pleated AC filters and which should I use?",
    question_variations: [
      "Fiberglass vs pleated AC filters",
      "Which AC filter is better pleated or fiberglass",
      "Pros and cons pleated filters",
      "Best filter type for AC home",
    ],
    short_answer:
      "Fiberglass filters are inexpensive and protect equipment but have low particulate capture; pleated filters have higher filtration efficiency and longer service intervals. Choose pleated filters for improved indoor air quality, but confirm HVAC compatibility and pressure-drop ratings.",
    long_answer:
      "Fiberglass (flat) filters primarily protect equipment from large debris and have low initial resistance to airflow; they are inexpensive but have low particle capture efficiency. Pleated filters use a folded media to increase surface area, offer higher MERV ratings (better particle capture), and often extend time between changes. However, higher-efficiency filters increase pressure drop which may reduce airflow on systems not designed for them; always verify manufacturer recommendations and measure static pressure if upgrading. In households with allergies or indoor pollutants, pleated filters (appropriate MERV 8–11) are typically recommended; for sensitive medical or laboratory environments consult an HVAC engineer.",
    tags: ["filter", "air-quality", "MERV", "maintenance"],
    safety:
      "Do not use filters with substantially higher pressure drop than the system accommodates—this can reduce airflow and affect compressor performance.",
    follow_up: [
      "What MERV rating is right for my home?",
      "How to measure static pressure in ducts?",
    ],
    source_references: [],
  },
  {
    id: "hvac-electrical-checklist-022",
    category: "maintenance",
    canonical_question:
      "What electrical checks should a technician perform during an AC service visit?",
    question_variations: [
      "AC electrical inspection checklist",
      "What electrical tests are done on AC service",
      "How to check AC wiring and electrical components",
    ],
    short_answer:
      "Technicians should inspect wiring integrity, terminal tightness, contactor function, run/start capacitor values, motor current draw, and protective devices (fuses/breakers). They should also verify proper grounding and look for signs of overheating.",
    long_answer:
      "A comprehensive electrical inspection includes: verifying correct voltage at unit terminals, measuring current draw of compressor and fan motors and comparing to nameplate ratings, testing start/run capacitors and replacing if out of tolerance, inspecting and tightening electrical connections, testing contactor and relays for proper operation, checking overload and protective devices, confirming proper grounding and bonding, and looking for thermal damage on wires and terminals. Documented electrical anomalies often precede catastrophic failures; technicians should correct loose connections and replace aged components to prevent motor or PCB damage.",
    tags: ["electrical", "service", "safety"],
    safety:
      "Electrical work must be performed by qualified personnel with lockout/tagout procedures in place.",
    follow_up: [
      "What are typical compressor amp draw ranges?",
      "When to replace a start capacitor?",
    ],
    source_references: [],
  },
  {
    id: "ac-short-cycling-023",
    category: "troubleshooting",
    canonical_question:
      "What causes an air conditioner to short-cycle and how should I address it?",
    question_variations: [
      "AC short-cycling causes",
      "Why does my air conditioner turn on and off frequently",
      "Short cycling and compressor damage",
    ],
    short_answer:
      "Short-cycling (frequent on/off cycles) can be caused by oversized equipment, thermostat placement/malfunction, low refrigerant, airflow restriction, or control board faults. Diagnose sizing and airflow first; prolonged short-cycling damages the compressor.",
    long_answer:
      "Common causes include: oversized unit relative to load (leading to rapid temperature recovery and frequent cycling), thermostat located near heat sources or in direct sun, low refrigerant causing rapid pressure/temperature swings, restricted airflow from clogged filters or ducts, failed or miscalibrated thermostat, and control-electrical faults (failed relays or sensors). Remedies depend on cause: correct thermostat placement or replacement, restore airflow by cleaning filters/ducts, repair refrigerant leaks and charge per spec, and, if oversized, consider system redesign or the use of control strategies (staged or variable-speed equipment) to lengthen run cycles. Persistent short-cycling warrants rapid technician intervention to avoid compressor failure.",
    tags: ["short-cycle", "compressor", "diagnostics"],
    safety:
      "Avoid repeatedly running a short-cycling unit—stopping operation and scheduling service is prudent to prevent damage.",
    follow_up: [
      "How to test if refrigerant is low?",
      "Is short-cycling covered under warranty?",
    ],
    source_references: [],
  },
  {
    id: "ac-inverter-frequency-024",
    category: "general",
    canonical_question:
      "How does inverter variable-frequency control improve AC performance compared with fixed-speed control?",
    question_variations: [
      "Benefits of variable-frequency compressor",
      "How inverter AC controls speed",
      "Why inverter AC saves energy",
    ],
    short_answer:
      "Inverter variable-frequency drives modulate compressor speed to meet load continuously, reducing energy wasted by on/off cycling, improving temperature stability, and lowering inrush currents at start-up.",
    long_answer:
      "Inverter-driven compressors use power electronics to vary motor frequency (and thus speed) to match instantaneous cooling load. This offers several advantages: reduced cycling losses (improves part-load efficiency), finer temperature and humidity control, lower acoustic signature due to steady operation at low speed, and reduced mechanical stress from soft-start behavior (lower inrush current). For applications with variable loads (residential occupancy patterns, variable solar gain), inverter systems typically have significantly better seasonal efficiency metrics and lower peak electrical demand. Design considerations include matching control algorithms to system thermal inertia and ensuring adequate maintenance of variable-speed motors and drives.",
    tags: ["inverter", "efficiency", "vfd"],
    safety: "",
    follow_up: [
      "Do inverter compressors require different lubricants?",
      "How much can inverter AC save on bills?",
    ],
    source_references: [],
  },
  {
    id: "ac-diagnostics-logbook-025",
    category: "service",
    canonical_question:
      "What measurements should be logged during a diagnostic visit to create an effective service record?",
    question_variations: [
      "AC diagnostic data to record",
      "What to log in HVAC service report",
      "Service checklist values to note",
    ],
    short_answer:
      "Log ambient conditions, return/supply temperatures, delta-T, static pressures, refrigerant pressures (high/low), suction/suction-line/subcooling/superheat, voltages/currents, and observed error codes with timestamps.",
    long_answer:
      "An effective diagnostic log includes: outdoor ambient temperature and humidity; indoor return and supply temperatures (and calculated delta-T); static pressure or friction rate in ducts; static pressure across coil; high- and low-side refrigerant pressures with corresponding saturation temperatures; measured superheat and subcooling; motor/compressor voltages and currents; capacitor microfarad readings; observed fault codes and sequence of events; and photographs of wiring nameplates or damaged components. Including timestamped measurements and technician annotations supports warranty claims, trend analysis, and future troubleshooting by establishing a measurable baseline.",
    tags: ["service", "diagnostics", "documentation"],
    safety: "",
    follow_up: [
      "Sample service checklist template",
      "How to calculate superheat and subcooling?",
    ],
    source_references: [],
  },
  {
    id: "ac-coil-cleaning-methods-026",
    category: "maintenance",
    canonical_question:
      "What are safe and effective methods for cleaning evaporator and condenser coils?",
    question_variations: [
      "How to clean AC coils safely",
      "Evaporator coil cleaning procedure",
      "Condenser coil cleaning how-to",
    ],
    short_answer:
      "Use soft brushes and low-pressure water rinses for condenser coils; use non-corrosive coil cleaner for heavy fouling. Evaporator coils typically require professional access—avoid aggressive chemicals that can damage fins and refrigerant lines.",
    long_answer:
      "Condenser coils: remove large debris manually, straighten bent fins gently, and rinse from inside-out with low-pressure water to avoid trapping debris inside fins. Use manufacturer-approved non-acid coil cleaners for heavy grime; avoid high-pressure washers that can distort fins. Evaporator coils: these are delicate and often require partial disassembly for safe access; use no-rinse foaming coil cleaners where accessible and ensure condensate pan and drain lines are cleared. Chemical selection should avoid alkaline or acidic products incompatible with coil metallurgy. For commercial or heavy buildup, schedule professional coil cleaning to ensure safe access, correct chemical application, and avoidance of refrigerant system contamination.",
    tags: ["coil", "cleaning", "maintenance"],
    safety:
      "Disconnect power before accessing coils and protect electrical components from moisture and cleaners.",
    follow_up: [
      "How often should coils be cleaned?",
      "Can I use household detergents on coils?",
    ],
    source_references: [],
  },
  {
    id: "ac-controls-sensors-027",
    category: "diagnostics",
    canonical_question:
      "Which sensors and controls commonly fail in modern split ACs and how do you test them?",
    question_variations: [
      "AC sensor failures thermostat sensor",
      "How to test AC temperature sensor",
      "Common control board faults in AC",
    ],
    short_answer:
      "Frequent failures: room/ambient temperature sensors, thermistors on evaporator coils, and communication modules. Testing involves resistance/voltage checks at specified temperatures and verifying sensor response using known temperature references.",
    long_answer:
      "Typical failing components include thermistors (NTC/PTC) in evaporator coils or room sensors, control relays/contactors, PCBs with moisture or surge damage, and communication modules in multi-split systems. Testing thermistors: measure resistance at known temperatures and compare against manufacturer tables (or warm/cool with a controlled reference). Test board power rails and I/O signals to confirm proper supply voltages. Check connectors for corrosion and test communication bus continuity for multi-unit systems. Replace failed sensors with manufacturer-specified parts to ensure compatibility with control algorithms.",
    tags: ["sensors", "controls", "diagnostics"],
    safety:
      "Electrostatic-sensitive PCBs necessitate ESD precautions during handling.",
    follow_up: [
      "How to read thermistor resistance table?",
      "Can a bad sensor cause compressor short-cycling?",
    ],
    source_references: [],
  },
  {
    id: "ac-thermostat-placement-028",
    category: "installation",
    canonical_question:
      "Where should a thermostat be placed for accurate temperature control and system longevity?",
    question_variations: [
      "Best location for thermostat AC",
      "Where to mount thermostat for accurate reading",
      "Thermostat placement guidelines",
    ],
    short_answer:
      "Place thermostats on an interior wall at eye level, away from direct sunlight, heat-emitting appliances, drafts, exterior doors, or return vents; avoid north- or south-facing walls exposed to sun load.",
    long_answer:
      "Thermostat placement principles: mount on an interior wall near frequently occupied spaces and central return air path but not directly in the return or supply stream. Avoid proximity to kitchens, windows, doors, lighting, or heat-generating appliances that bias readings. Place at approximately 1.2–1.5 m (4–5 ft) above finished floor for representative ambient measurement. For zoned systems, use multiple sensors or remote sensors in occupied zones to balance comfort. Poor placement leads to cycling, occupant discomfort, and inefficient operation.",
    tags: ["thermostat", "installation", "controls"],
    safety: "",
    follow_up: [
      "Can I use a smart thermostat with my AC?",
      "How to calibrate thermostat temperature?",
    ],
    source_references: [],
  },
  {
    id: "ac-duct-balancing-029",
    category: "installation",
    canonical_question:
      "What is duct balancing and why is it important for comfort and efficiency?",
    question_variations: [
      "How to balance HVAC ducts",
      "Duct balancing procedure",
      "Why rooms are uneven temperature duct balancing",
    ],
    short_answer:
      "Duct balancing adjusts airflow to deliver design CFM to each zone/room by tuning dampers and registers; it improves comfort uniformity, reduces energy use, and prevents undue load on the system.",
    long_answer:
      "Duct balancing involves measuring actual airflow (CFM) at supply registers and adjusting dampers, grille positions, or diffuser settings to match design loads. An unbalanced system may over-condition some rooms while depriving others, causing occupants to change thermostat setpoints and triggering inefficiencies. Techniques include using airflow hoods, pitot tubes, or anemometers to measure flow, sealed and insulated ducts to reduce leakage, and, where necessary, redesigning branch runs. A properly balanced system ensures efficient heat transfer, prevents hotspots, and reduces run-time cycling.",
    tags: ["ductwork", "airflow", "installation"],
    safety: "",
    follow_up: [
      "What tools are used for airflow measurement?",
      "How much leakage is acceptable in ducts?",
    ],
    source_references: [],
  },
  {
    id: "ac-dehumidification-030",
    category: "general",
    canonical_question:
      "How does an air conditioner remove humidity and how can I improve dehumidification?",
    question_variations: [
      "How AC reduces humidity",
      "Improve AC dehumidification",
      "AC not removing humidity what to do",
    ],
    short_answer:
      "Dehumidification occurs when warm, humid air contacts cold evaporator coils causing moisture to condense. Improve dehumidification by ensuring proper airflow, lower evaporator temperature, longer run times (inverter systems), or using dedicated dehumidifiers if necessary.",
    long_answer:
      "ACs remove moisture as air cools below its dew point on the evaporator coil; condensate is collected and drained. Factors improving dehumidification include adequate airflow across coil (but not excessive which raises coil temperature), correct refrigerant charge, and longer runtime to allow sufficient air volume to be processed. Inverter systems typically dehumidify more effectively due to longer steady operation. For persistent humidity beyond AC capacity, consider a dedicated dehumidifier, improved ventilation, or addressing moisture sources (plumbing leaks, poor building envelope).",
    tags: ["dehumidification", "comfort", "controls"],
    safety: "",
    follow_up: [
      "Does lowering thermostat increase dehumidification?",
      "Should I run AC fan continuously for dehumidification?",
    ],
    source_references: [],
  },
  {
    id: "ac-pvc-piping-insulation-031",
    category: "installation",
    canonical_question:
      "Which pipe and insulation practices prevent condensate and refrigerant problems in split systems?",
    question_variations: [
      "How to insulate refrigerant lines",
      "Condensate pipe best practices",
      "Split AC piping installation tips",
    ],
    short_answer:
      "Use properly sized copper refrigerant lines insulated with closed-cell nitrile or neoprene insulation; slope condensate lines for gravity drainage and insulate where condensation could form. Avoid kinks and long unsupported runs.",
    long_answer:
      "Refrigerant lines should be installed with correct diameter and brazed joints, insulated continuously with closed-cell nitrile or elastomeric foam rated for HVAC use to prevent condensation and thermal losses. Condensate lines should be PVC or equivalent with a positive downward slope (1:100 recommended) and accessible cleanouts. Insulate suction lines to prevent sweating in humid spaces. Avoid running refrigerant lines within plenums or unconditioned cavities without protection and ensure penetrations are sealed to maintain building envelope integrity. Secure lines to prevent vibration and provide service-accessible shutoffs where applicable.",
    tags: ["piping", "insulation", "installation"],
    safety:
      "Brazing and refrigerant work require qualified technicians and appropriate safety measures (ventilation, PPE).",
    follow_up: [
      "What insulation thickness is recommended for suction lines?",
      "How to clear condensate traps?",
    ],
    source_references: [],
  },
  {
    id: "ac-eco-mode-explained-032",
    category: "general",
    canonical_question:
      "What does 'Eco' or 'Energy Saver' mode do on modern air conditioners and when should I use it?",
    question_variations: [
      "How Eco mode works on AC",
      "Should I use energy saver on AC",
      "Eco mode vs normal AC mode",
    ],
    short_answer:
      "'Eco' reduces compressor and fan run speeds or raises the setpoint to reduce energy consumption; it is best used when steady but less aggressive cooling is acceptable and to reduce peak power draw.",
    long_answer:
      "Eco or Energy Saver modes vary by manufacturer but commonly implement strategies such as raising the temperature setpoint deadband, enabling compressor step-down or variable-speed operation, or cycling the fan intermittently to reduce electricity use. Use Eco when occupants accept slightly higher temperatures for improved efficiency, or when minimizing peak demand/utility costs is desired. Avoid Eco if rapid temperature recovery or maximum dehumidification is required (e.g., high occupancy or humid conditions).",
    tags: ["modes", "efficiency", "controls"],
    safety: "",
    follow_up: [
      "Does Eco mode save money?",
      "Is Eco mode bad for humidity control?",
    ],
    source_references: [],
  },
  {
    id: "ac-odour-bacterial-growth-033",
    category: "safety",
    canonical_question:
      "What causes microbiological odours (musty or moldy smells) in AC systems and how do you remediate them?",
    question_variations: [
      "Mold smell from AC how to remove",
      "AC musty smell bacteria",
      "How to clean AC to remove mildew smell",
    ],
    short_answer:
      "Musty odours usually stem from microbial growth on coils, in drain pans, or duct surfaces due to standing water or poor drainage. Remediation requires cleaning coils/drain pans, clearing condensate lines, and addressing moisture sources; severe infestations may need professional sanitation.",
    long_answer:
      "Microbial growth thrives where condensate accumulates and air stagnates. Remediation steps: remove and clean or replace contaminated filters, clean evaporator coils and drain pan with appropriate biocidal-cleaners or EPA-registered treatments, clear condensate drain lines and test float switches/pumps, inspect ducts for biological growth and clean if necessary, and reduce relative humidity or improve ventilation. Where occupants have severe allergies or immunocompromise, engage certified indoor-air-quality professionals to test and remediate. Preventive maintenance (ensuring proper drain, regular coil cleaning, and maintaining airflow) mitigates recurrence.",
    tags: ["mold", "indoor-air-quality", "health"],
    safety:
      "Use PPE when handling mold; do not disperse contaminated material without containment.",
    follow_up: [
      "What cleaners are safe for coils?",
      "When to replace duct insulation due to mold?",
    ],
    source_references: [],
  },
  {
    id: "ac-surge-protection-034",
    category: "safety",
    canonical_question:
      "Should I install surge protection for my AC unit and what type is recommended?",
    question_variations: [
      "Surge protector for HVAC unit",
      "Do air conditioners need surge protection",
      "Whole-home surge protection for AC",
    ],
    short_answer:
      "Surge protection is recommended to protect sensitive control electronics from transient voltage spikes. Use a UL/IEC-rated Type 2 surge protective device at the service panel and consider a local Type 1/2 device at the unit for critical installations.",
    long_answer:
      "Modern AC control boards and variable-frequency drives are vulnerable to transient overvoltages from lightning strikes or switching events. A layered protection strategy is best: a service-panel (main) surge protective device (SPD) to clamp large transients (Type 1/2 per IEC 61643), and a point-of-use SPD installed at the AC disconnect to provide localized protection. Proper grounding and bonding are essential to SPD performance. Coordinate with an electrician and follow local electrical codes; SPDs should be selected based on nominal system voltage and expected surge exposure.",
    tags: ["electrical", "protection", "safety"],
    safety:
      "Only qualified electricians should install SPDs; proper grounding is critical to function and safety.",
    follow_up: [
      "Can an SPD save my compressor?",
      "How to size an SPD for my home?",
    ],
    source_references: [],
  },
  {
    id: "ac-uv-germicidal-light-035",
    category: "air-quality",
    canonical_question:
      "Do UV germicidal lamps in HVAC systems reduce microbial contamination effectively?",
    question_variations: [
      "UV lights in AC effective",
      "UV-C HVAC pros and cons",
      "Install UV lamps in air handler",
    ],
    short_answer:
      "UV-C lamps can reduce microbial growth on coils and in drain pans and may reduce some airborne microbes; they are an effective complement to maintenance but not a substitute for cleaning or filtration.",
    long_answer:
      "UV-C irradiance at coils and drain pans reduces viable microbial populations when sized and positioned correctly. Benefits include reduced coil fouling (improving heat transfer) and possibly some reduction in airborne pathogens. Limitations: UV does not remove particulates (filters still required); effectiveness depends on lamp intensity, exposure time, and proper maintenance (lamp aging reduces output). Safety considerations include shielding lamps to prevent occupant exposure and following manufacturer instructions. UV systems are best deployed as part of an integrated IAQ strategy (filtration, ventilation, humidity control, and maintenance).",
    tags: ["uv", "iaq", "maintenance"],
    safety:
      "Direct UV-C exposure is harmful to skin and eyes; installations must prevent occupant exposure.",
    follow_up: [
      "How to maintain UV lamps?",
      "Are UV lamps covered under HVAC warranty?",
    ],
    source_references: [],
  },
  {
    id: "ac-refrigerant-phaseout-036",
    category: "policy",
    canonical_question:
      "What should owners know about refrigerant phase-outs and servicing legacy refrigerants?",
    question_variations: [
      "Refrigerant phaseout impact on AC owners",
      "Can I still service R22 systems",
      "What refrigerant to use when replacing old AC",
    ],
    short_answer:
      "Regulatory phase-downs limit production of high-GWP refrigerants; owners of older systems (e.g., R22) should plan for end-of-life replacement rather than sustained repairs. When replacing, choose modern refrigerants (e.g., R32, R410A alternatives) per manufacturer recommendations.",
    long_answer:
      "Global and regional regulations reduce allowable production and supply of high-global-warming-potential (GWP) refrigerants. For legacy systems using phased-down refrigerants, servicing may become costly due to supply constraints; mixing refrigerants or retrofitting to a different refrigerant is generally inadvisable without manufacturer-approved kits. Owners should budget for equipment replacement at end-of-life and select new units designed for current refrigerants, considering GWP, efficiency, and service infrastructure. Consult certified technicians and observe local regulatory requirements for reclamation and disposal.",
    tags: ["refrigerant", "policy", "replacement"],
    safety:
      "Improper refrigerant mixing or charging can cause system failure and environmental harm; only certified technicians should handle refrigerants.",
    follow_up: [
      "How to dispose of old refrigerant properly?",
      "What are low-GWP refrigerant options?",
    ],
    source_references: [],
  },
  {
    id: "ac-smart-controls-037",
    category: "controls",
    canonical_question:
      "What are the operational and efficiency advantages of integrating smart thermostats or IoT controls with AC systems?",
    question_variations: [
      "Benefits smart thermostat AC",
      "Smart HVAC controls pros and cons",
      "Can smart thermostat improve AC efficiency",
    ],
    short_answer:
      "Smart controls enable schedule-based setpoints, adaptive algorithms, remote monitoring, and integration with occupancy or weather data—these features can reduce energy use and improve occupant comfort if installed and configured correctly.",
    long_answer:
      "Smart thermostats use learning algorithms, geofencing, demand-response signals, and occupancy detection to optimize setpoints and run-times, potentially reducing energy consumption. They can provide diagnostic data and alerts for maintenance. Integration with multi-zone systems or variable-speed equipment should be performed with compatible controls to avoid conflicts. Realized savings depend on user behavior, accurate sensor placement, and proper configuration; poorly configured smart controls can lead to discomfort or wasted energy.",
    tags: ["smart", "thermostat", "IoT"],
    safety: "",
    follow_up: [
      "Which smart thermostat works with my AC?",
      "How to integrate occupancy sensors?",
    ],
    source_references: [],
  },
  {
    id: "ac-internal-corrosion-038",
    category: "failure-modes",
    canonical_question:
      "What causes internal corrosion in AC refrigerant circuits and how can it be prevented?",
    question_variations: [
      "AC compressor corrosion causes",
      "Refrigerant circuit corrosion prevention",
      "Why does AC develop acid or corrosion inside",
    ],
    short_answer:
      "Moisture ingress, acid formation due to refrigerant-oil degradation, and galvanic corrosion from dissimilar metals cause internal corrosion. Prevention includes proper evacuation, use of dryers/filters, correct oil/refrigerant combinations, and corrosion-resistant materials.",
    long_answer:
      "Internal corrosion commonly arises from moisture contamination during installation or from moisture generated by decomposition of refrigerant or lubricant under electrical or thermal stress. Acid formation can corrode copper and steel components and degrade lubricants. Preventive measures: deep evacuation and hold tests before charging, use of driers/filters during service, correct oil-refrigerant pairing, limit compressor overheating, and use of corrosion inhibitors or corrosion-resistant materials in aggressive environments. For legacy systems with suspected acid, a professional flush and oil change may be required.",
    tags: ["corrosion", "reliability", "maintenance"],
    safety:
      "Dealing with acid-contaminated oil and lines requires qualified service and appropriate disposal.",
    follow_up: [
      "How to test for acid in refrigerant oil?",
      "When is flush required?",
    ],
    source_references: [],
  },
  {
    id: "ac-noise-sound-levels-039",
    category: "troubleshooting",
    canonical_question:
      "What are typical acceptable sound levels for residential AC outdoor and indoor units, and how do you diagnose excessive noise?",
    question_variations: [
      "AC sound level acceptable dB",
      "How to measure AC noise",
      "Outdoor unit too noisy what to check",
    ],
    short_answer:
      "Residential units commonly operate between 35–60 dB(A) depending on mode and distance. Excessive noise diagnosis includes checking fan balance, motor bearings, mounting isolation, and refrigerant flow noise.",
    long_answer:
      "Sound levels depend on unit class and distance; manufacturers publish dB(A) ratings at specified distances. Diagnose excessive noise by isolating source (fan, compressor, airflow turbulence, or structural vibration). Inspect fan blades for damage and balance, check motor bearings for wear (screeching/grinding), ensure condenser base and mounts have vibration isolation pads, verify that panels and grills are secure, and check for high refrigerant velocity or liquid slugging causing hissing/knocking. Mitigation may involve replacing worn bearings, installing vibration isolators, or selecting quieter equipment with larger fans running at lower speeds.",
    tags: ["noise", "acoustics", "diagnostics"],
    safety: "",
    follow_up: [
      "How to measure dB with smartphone?",
      "Are silencers effective on outdoor units?",
    ],
    source_references: [],
  },
  {
    id: "ac-freon-exposure-first-aid-040",
    category: "safety",
    canonical_question:
      "What first-aid steps are required in the event of refrigerant exposure or inhalation?",
    question_variations: [
      "Freon inhalation what to do",
      "Refrigerant exposure first aid",
      "Symptoms of refrigerant poisoning and response",
    ],
    short_answer:
      "Move the affected person to fresh air immediately; if breathing is difficult, administer oxygen and seek emergency medical attention. For skin or eye contact, flush with water and seek medical care. Follow local emergency procedures for large leaks.",
    long_answer:
      "Refrigerant exposure can cause respiratory irritation, dizziness, and, in high concentrations, asphyxiation. First aid: evacuate area, ventilate, and avoid entering enclosed spaces without breathing apparatus. For inhalation, lay the person down in a well-ventilated area, monitor breathing, and provide oxygen if trained to do so. For skin contact, remove contaminated clothing and flush skin with water; for eye contact, flush eyes for at least 15 minutes and seek medical attention. Emergency response to large leaks may require hazardous-material professionals; always document the incident and follow regulatory reporting if applicable.",
    tags: ["safety", "refrigerant", "first-aid"],
    safety:
      "Do not attempt to enter a confined space with suspected refrigerant accumulation without self-contained breathing apparatus.",
    follow_up: [
      "What PPE is required when handling refrigerants?",
      "When to call HazMat for a leak?",
    ],
    source_references: [],
  },
  {
    id: "ac-age-and-replacement-041",
    category: "service",
    canonical_question: "When should I consider replacing my AC unit rather than repairing it?",
    question_variations: [
      "Replace vs repair AC how to decide",
      "When to replace old air conditioner",
      "Is it worth fixing 12-year-old AC",
    ],
    short_answer:
      "Consider replacement when the unit is older than 10–15 years, requires major component replacement (compressor/coil) with high cost relative to replacement, exhibits poor efficiency, or refrigerant type is obsolete under phase-out policies.",
    long_answer:
      "Evaluate replacement when repair costs exceed ~50% of replacement cost, when frequency of breakdowns is increasing, when efficiency is low (high operating cost), or when the unit uses phased-out refrigerants with limited service options. Also consider occupant comfort—zoning deficiencies or chronic humidity problems may justify modern equipment. Conduct a life-cycle cost analysis including estimated energy savings from modern high-SEER, inverter systems and potential utility rebates to determine financial viability.",
    tags: ["replacement", "lifecycle", "cost-benefit"],
    safety: "",
    follow_up: [
      "How to calculate payback for new AC?",
      "What rebates exist for efficient AC?",
    ],
    source_references: [],
  },
  {
    id: "ac-ambient-effects-042",
    category: "diagnostics",
    canonical_question:
      "How do ambient conditions (temperature, humidity) affect AC performance and diagnostic readings?",
    question_variations: [
      "Ambient temperature effect on AC",
      "How outside temp affects refrigerant pressure",
      "Readings vary with ambient how to account",
    ],
    short_answer:
      "Ambient temperature strongly influences refrigerant pressures and heat-transfer rates—pressure-temperature charts and correction tables must be used when interpreting manifold readings; high humidity increases latent load and can reduce sensible cooling.",
    long_answer:
      "Refrigerant saturation pressures and expected superheat/subcooling values correlate to ambient and evaporator temperatures; technicians must reference pressure-temperature charts for the specific refrigerant. High ambient reduces capacity and raises condensing pressure, while low ambient can cause excessive subcooling or head pressure problems. Humidity increases latent load, requiring longer run times for dehumidification. Diagnostic measurements should therefore be recorded with ambient conditions to allow correct interpretation and comparison to manufacturer specifications.",
    tags: ["diagnostics", "ambient", "refrigerant"],
    safety: "",
    follow_up: [
      "How to use pressure-temperature charts properly?",
      "What corrections for altitude?",
    ],
    source_references: [],
  },
  {
    id: "ac-altitude-effect-043",
    category: "installation",
    canonical_question:
      "How does altitude affect air conditioner sizing, refrigerant pressures, and performance?",
    question_variations: [
      "AC performance at high altitude",
      "Do I need different charge at altitude",
      "How altitude affects compressor load",
    ],
    short_answer:
      "Altitude reduces ambient air density, lowering convective heat transfer and affecting condensing pressures; manufacturers provide altitude derating and adjustment guidance—sizing and refrigerant charge procedures may require correction.",
    long_answer:
      "At higher altitude, lower air density reduces airflow cooling capacity at a given fan speed and reduces convective heat-transfer coefficients, which can elevate condensing temperatures and strain compressors. Some manufacturers advise derating capacity or increasing fan performance, and charging procedures for refrigerant may require pressure-temperature compensation. For installations above specified elevations, consult manufacturer altitude limits and consider equipment with forced-air enhancements or larger condensers. Corrective measures maintain reliability and capacity.",
    tags: ["altitude", "performance", "installation"],
    safety: "",
    follow_up: [
      "What altitude derating is typical?",
      "How to correct charge at altitude?",
    ],
    source_references: [],
  },
  {
    id: "ac-variable-speed-fan-benefits-044",
    category: "general",
    canonical_question:
      "What are the advantages of variable-speed indoor blowers compared with single-speed fans?",
    question_variations: [
      "Variable speed blower pros and cons",
      "ECM fan benefits in HVAC",
      "Why use variable speed fan in AC",
    ],
    short_answer:
      "Variable-speed blowers improve comfort via consistent airflow, reduce noise, increase dehumidification control through longer runtimes, and often reduce energy consumption by operating at lower speeds most of the time.",
    long_answer:
      "Electronically commutated motor (ECM) blowers allow precise airflow modulation, reduce start/stop stresses, and provide better zone control and static pressure handling. Longer, lower-speed operation increases latent removal and reduces temperature swings. Energy savings result from reduced electrical draw at partial speeds compared to constant high-speed motors. Integration with variable-speed compressors yields synergistic efficiency gains. Consider control compatibility and possible increased initial cost when specifying variable-speed blowers.",
    tags: ["blower", "vsm", "efficiency"],
    safety: "",
    follow_up: [
      "Do ECM motors need different maintenance?",
      "How much quieter are ECM blowers?",
    ],
    source_references: [],
  },
  {
    id: "ac-zoning-systems-045",
    category: "installation",
    canonical_question:
      "When is a zoned HVAC system beneficial and what are typical design trade-offs?",
    question_variations: [
      "Benefits of zoning HVAC",
      "Zoned AC system pros cons",
      "How does zoning affect efficiency",
    ],
    short_answer:
      "Zoning improves occupant comfort and can reduce energy use by conditioning only occupied areas. Trade-offs include increased installation complexity, potential static pressure issues, and the need for compatible control strategies or variable-speed equipment.",
    long_answer:
      "Zoning divides conditioned spaces with dampers and zone thermostats to match comfort needs. Benefits: targeted conditioning, reduced overcooling/overheating, and potential energy savings. Trade-offs: improperly designed zones cause high static pressure and reduced airflow; conventional single-stage equipment may short-cycle when serving small zones. Best practice pairs zoning with variable-speed equipment or multiple smaller units and includes proper ductwork balancing and control interlocks to maintain system performance and avoid undue stress on equipment.",
    tags: ["zoning", "controls", "design"],
    safety: "",
    follow_up: [
      "How many zones is optimal?",
      "Does zoning reduce HVAC lifespan?",
    ],
    source_references: [],
  },
  {
    id: "ac-commissioning-checklist-046",
    category: "installation",
    canonical_question:
      "Provide a concise commissioning checklist for a newly installed split AC.",
    question_variations: [
      "AC commissioning steps",
      "Startup checklist split AC",
      "What to test after AC install",
    ],
    short_answer:
      "Verify correct refrigerant charge, electrical connections/voltages, airflow and delta-T, condensate drainage, thermostat calibration, secure mounting and vibration isolation, and document all readings.",
    long_answer:
      "Commissioning tasks: confirm model/spec match and proper refrigerant; perform vacuum and leak test before charge; measure high/low pressures and calculate superheat/subcooling; verify supply and return temps and delta-T under design load; confirm airflow CFM per design; check voltages and currents; inspect duct sealing and insulation; test condensate flow and float/pump operation; calibrate thermostat and test control sequences; validate noise and vibration isolation; and provide owner with operation and maintenance guidance with recorded test data attached.",
    tags: ["commissioning", "checklist", "startup"],
    safety:
      "Do not energize the compressor until proper evacuation and charge verification are completed.",
    follow_up: [
      "Provide a printable commissioning form",
      "Which instruments are essential for commissioning?",
    ],
    source_references: [],
  },
  {
    id: "ac-freeze-issues-047",
    category: "troubleshooting",
    canonical_question:
      "Why does an evaporator coil freeze and what corrective actions should be taken?",
    question_variations: [
      "AC evaporator coil freezing reasons",
      "Why does my AC freeze up",
      "Coil frost melting then refreezing causes",
    ],
    short_answer:
      "Freezing results from airflow restriction, low refrigerant charge, or continuous low-load operation causing coil temperature to drop below freezing. Correct by restoring airflow, repairing refrigerant leaks, and ensuring appropriate ambient conditions or control strategies.",
    long_answer:
      "Airflow restriction (clogged filter, closed registers, blocked return) reduces convective heat transfer and lowers coil temperature; low refrigerant reduces evaporating pressure and coil temperature; continuous low-load (very cool ambient or low thermostat settings) can lead the coil to operate below dew/freezing point. Remedies: replace/clean filters, inspect/clear ducts and vents, check for wet insulation or collapsed duct sections, perform refrigerant diagnostics and repair leaks/change charge, and implement control changes to prevent prolonged low-load operation. After thawing, inspect system for underlying causes before resuming normal use.",
    tags: ["freeze", "evaporator", "diagnostics"],
    safety: "",
    follow_up: [
      "How to safely thaw a frozen AC?",
      "Can frozen coil damage compressor?",
    ],
    source_references: [],
  },
  {
    id: "ac-scaling-and-minerals-048",
    category: "maintenance",
    canonical_question:
      "How do minerals and hard-water deposits affect condensate systems and how are they managed?",
    question_variations: [
      "Hard water condensate line issues",
      "Mineral scale in AC drain pan",
      "How to prevent condensate pipe scaling",
    ],
    short_answer:
      "Mineral deposits from hard water accumulate in condensate pans and pumps reducing flow and causing overflows. Management includes periodic cleaning, installing inline strainers or pre-filters, and using water-softening or sacrificial traps where practical.",
    long_answer:
      "Hard-water deposits concentrate in low-flow condensate paths leading to reduced drainage and pump failures. Prevention: periodic cleaning of pans and traps, installing condensate line strainers, and ensuring condensate removal outlets are not restrictive. In specialized applications, consider using condensate treatment (sacrificial cartridges) or routing condensate to areas with appropriate drainage and softening when required. Regular maintenance schedules prevent emergency overflows and corrosion of pans.",
    tags: ["condensate", "water-quality", "maintenance"],
    safety: "",
    follow_up: [
      "How often to service condensate pump?",
      "What cleaning agents are safe for pans?",
    ],
    source_references: [],
  },
  {
    id: "ac-filter-sensors-049",
    category: "controls",
    canonical_question:
      "How do filter-pressure sensors (differential-pressure switches) work and how reliable are they for maintenance alerts?",
    question_variations: [
      "Filter pressure sensor how it works",
      "DP switch for filter change alerts",
      "How accurate differential pressure sensors are in HVAC",
    ],
    short_answer:
      "Differential-pressure sensors measure pressure drop across a filter; when the drop exceeds a threshold they trigger alerts. They are reliable when calibrated and correctly located, but must be sized for expected airflow and filter type.",
    long_answer:
      "DP sensors provide objective measurement of filter loading and can automate maintenance alerts. Installation requires correct tubing placement upstream/downstream of the filter and selection of an appropriate setpoint that balances airflow tolerance with filter life. Overly sensitive settings cause false positives; undersized sensors may not detect progressive loading. Periodic calibration and verification against an airflow or visual inspection are recommended to ensure continued reliability.",
    tags: ["sensors", "maintenance", "automation"],
    safety: "",
    follow_up: [
      "Recommended setpoints for MERV 8 filters",
      "How to calibrate DP sensor?",
    ],
    source_references: [],
  },
  {
    id: "ac-commissioning-records-retention-050",
    category: "service",
    canonical_question:
      "How long should commissioning and service records be retained and why is this important?",
    question_variations: [
      "Retention period for HVAC service records",
      "Why keep commissioning logs",
      "Records to keep for AC warranty and compliance",
    ],
    short_answer:
      "Retain commissioning and major service records for the life of the equipment (commonly 10–15 years) or at minimum the warranty period. Records support warranty claims, trend analysis, and regulatory compliance.",
    long_answer:
      "Documented commissioning and maintenance history provide evidence for warranty coverage, facilitate long-term performance analysis, and can identify patterns leading to failures. Recommended retention aligns with component lifetimes and warranty durations—store digital copies in a secure, searchable format for at least the life expectancy of the equipment. For commercial installations, retain records as stipulated by contracts, regulatory codes, or asset management requirements. Good recordkeeping reduces downtime and protects owner/contractor interests.",
    tags: ["documentation", "warranty", "service"],
    safety: "",
    follow_up: [
      "Sample digital record template",
      "How to securely store service records?",
    ],
    source_references: [],
  },
  {
    id: "gas-line-routing-081",
    category: "installation",
    canonical_question:
      "What are best practices for routing refrigerant and condensate lines during installation?",
    question_variations: [
      "How to route refrigerant lines",
      "Best way to run condensate pipe",
      "AC line routing installation tips",
      "Condensate slope and routing guidelines",
    ],
    short_answer:
      "Route refrigerant lines with minimal bends, provide continuous insulation, maintain service access, and slope condensate lines toward the drain (minimum 1:100).",
    long_answer:
      "Minimize length and number of bends in refrigerant runs to reduce pressure loss and simplify leak detection. Insulate suction lines continuously with closed-cell insulation; seal penetrations to preserve building envelope. Provide isolation valves and service shutoffs where manufacturer allows. Condensate lines must slope downward (recommended 1% or 1:100) with accessible cleanouts and trap configuration to prevent air locks and odor ingress. Avoid routing condensate near electrical or high-temperature sources. Document routing for future service.",
    tags: ["installation", "piping", "condensate"],
    safety:
      "Brazing and refrigerant work requires qualified personnel and appropriate PPE.",
    follow_up: [
      "What is proper condensate trap configuration?",
      "How to size refrigerant line length?",
    ],
    source_references: [],
  },
  {
    id: "vibration-isolation-082",
    category: "installation",
    canonical_question:
      "How should outdoor units be mounted to minimize vibration transmission to the building?",
    question_variations: [
      "Outdoor AC vibration mounting",
      "How to isolate AC vibrations",
      "Best pads for condenser mounting",
      "Reduce vibration AC outdoor unit",
    ],
    short_answer:
      "Use appropriately sized vibration isolation pads or mounts, rigid support with flexible connections for piping, and avoid direct contact with lightweight building elements.",
    long_answer:
      "Select vibration pads rated for equipment weight and dynamic load; pads should be installed under all mounting feet with adequate bearing area. For rooftop installations, use inertia bases or spring isolators sized per manufacturer guidance. Provide flexible refrigerant and condensate connections (vibration loops) and avoid rigid piping into the building structure. Periodically inspect mounts for compression set or degradation. Proper isolation reduces structure-borne noise and fastener loosening.",
    tags: ["installation", "vibration", "acoustics"],
    safety: "",
    follow_up: [
      "How to size spring isolators?",
      "Are neoprene pads adequate for roofs?",
    ],
    source_references: [],
  },
  {
    id: "compressor-oil-types-083",
    category: "parts",
    canonical_question:
      "How do compressor oil types affect compatibility and reliability?",
    question_variations: [
      "What oil for AC compressor",
      "PAG vs POE oil compatibility",
      "Compressor oil types explained",
      "What oil does my AC need",
    ],
    short_answer:
      "Use the lubricant specified by the manufacturer; mixing incompatible oils (PAG, POE, mineral) can cause lubrication failure and system damage.",
    long_answer:
      "Compressors require specific lubricants matched to refrigerant chemistry; POE is common with HFCs like R-410A, while mineral oils were used with older CFC/HCFC systems. Mixing oils alters viscosity, solvency, and miscibility properties, risking oil logging or starvation. Always follow OEM recommendations and replace oil when performing major component changes. When in doubt, consult manufacturer service bulletins before changing lubricant types.",
    tags: ["oil", "compressor", "compatibility"],
    safety: "Lubricant handling should follow MSDS guidance.",
    follow_up: [
      "How to identify current oil type?",
      "Can you flush old oil before retrofit?",
    ],
    source_references: [],
  },
  {
    id: "hvac-filter-sizing-084",
    category: "maintenance",
    canonical_question:
      "How do I select correct filter size and MERV rating for my HVAC system?",
    question_variations: [
      "Choosing filter size and MERV",
      "What MERV rating for home AC",
      "Filter size selection HVAC",
      "Effect of MERV on airflow",
    ],
    short_answer:
      "Choose filters that match the cabinet slot dimensions and a MERV rating appropriate to air quality needs and system capability (MERV 8–11 commonly balances filtration and airflow in residences).",
    long_answer:
      "Measure filter frame dimensions and confirm thickness for proper sealing. Select a MERV rating that captures desired particulate sizes; higher MERV improves filtration but increases pressure drop—verify that the system's blower and static pressure allowance can accommodate the chosen filter without degrading airflow. For homes with respiratory sensitivities, MERV 11–13 may be beneficial if the system supports it. Always consult HVAC specifications to avoid compromising performance.",
    tags: ["filter", "MERV", "air-quality"],
    safety: "",
    follow_up: [
      "How to measure static pressure?",
      "Where to buy custom-sized filters?",
    ],
    source_references: [],
  },
  {
    id: "air-cleaner-options-085",
    category: "air-quality",
    canonical_question:
      "What supplemental air-cleaning technologies complement an AC system and when should they be used?",
    question_variations: [
      "Air purifier for AC",
      "HEPA, UV, ionizer in HVAC",
      "Supplemental IAQ devices",
      "When to add air cleaner",
    ],
    short_answer:
      "Supplemental devices—HEPA, activated carbon, UV-C, and electronic air cleaners—address particulates, odors, biological growth, and some microbes; selection depends on specific IAQ objectives and system compatibility.",
    long_answer:
      "HEPA filters remove fine particulates but impose higher pressure drops; activated carbon adsorbs VOCs/odors; UV-C targets microbial growth on coils and pans; electronic precipitators capture particulates but require maintenance and can produce ozone if not designed properly. Integrate devices with due regard to blower capacity, static pressure, maintenance regimes, and occupant sensitivities. Use objective IAQ metrics (PM2.5, VOCs) to justify installations.",
    tags: ["iaq", "air-cleaning", "HEPA"],
    safety:
      "Avoid air cleaners that generate ozone in occupied spaces.",
    follow_up: [
      "Does UV-C replace filtration?",
      "How to measure IAQ improvements?",
    ],
    source_references: [],
  },
  {
    id: "refrigerant-oil-return-086",
    category: "diagnostics",
    canonical_question:
      "What causes poor oil return in a refrigeration circuit and how is it diagnosed?",
    question_variations: [
      "Oil return issues in AC",
      "Why oil plugs in compressor",
      "Diagnose lack of oil return",
    ],
    short_answer:
      "Poor oil return results from low refrigerant velocity, incorrect piping slope, excessive oil charge, or system geometry causing oil pooling in suction lines.",
    long_answer:
      "Oil should circulate with refrigerant vapor; factors that impede return include oversized suction lines, long horizontal runs without slope, low load conditions producing low vapor velocities, and oil that is too viscous at operating temperatures. Diagnosis uses sight glass, oil return calculations, and temperature/pressure profiles. Corrective actions include resizing lines, adding oil traps, improving system velocity, or modifying piping layout under technician supervision.",
    tags: ["oil-return", "piping", "diagnostics"],
    safety:
      "Work on refrigerant circuits and oil recovery must be performed by certified technicians.",
    follow_up: [
      "How to calculate minimum velocity for oil return?",
      "What is an oil trap and where to place it?",
    ],
    source_references: [],
  },
  {
    id: "ac-commissioning-software-087",
    category: "service",
    canonical_question:
      "What software tools assist with HVAC commissioning and documentation?",
    question_variations: [
      "Commissioning tools HVAC",
      "Software for HVAC test and balance",
      "Commissioning documentation software",
    ],
    short_answer:
      "Commissioning management platforms, mobile data-collection apps, and specialized test-and-balance software streamline measurements, templates, and record retention; choose tools that export standardized reports.",
    long_answer:
      "Common workflows use mobile apps for temperature/pressure logging, digital checklists for tasks, and cloud-based repositories for commissioning records. Tools that integrate instrument data via Bluetooth (thermometers, manometers, flow hoods) reduce transcription errors. Select platforms that support industry formats (PDF, CSV), allow version history, and meet owner/contractor documentation requirements.",
    tags: ["commissioning", "software", "documentation"],
    safety: "",
    follow_up: [
      "What instruments integrate with commissioning apps?",
      "How to produce owner handover reports?",
    ],
    source_references: [],
  },
  {
    id: "ac-rebate-programs-088",
    category: "policy",
    canonical_question:
      "How can homeowners find and apply for energy-efficiency rebates when replacing AC equipment?",
    question_variations: [
      "AC rebate finders",
      "How to get energy rebate for new AC",
      "Utility rebates for HVAC",
    ],
    short_answer:
      "Check local utility programs, government incentive portals, and manufacturer promotions; ensure equipment qualifies and that authorized contractors submit required documentation.",
    long_answer:
      "Eligibility criteria often include minimum SEER/HSPF ratings, certified installers, and pre-approval steps. Use national and regional rebate search tools, consult utility technical specifications, and gather purchase/installation invoices and commissioning records for claim submission. Rebates may change; verify current program terms before procurement.",
    tags: ["rebates", "policy", "efficiency"],
    safety: "",
    follow_up: [
      "Do rebates require specific contractors?",
      "How to document commissioning for rebate?",
    ],
    source_references: [],
  },
  {
    id: "ac-remote-monitoring-089",
    category: "controls",
    canonical_question:
      "What are the benefits and privacy considerations of remote monitoring for AC systems?",
    question_variations: [
      "Remote HVAC monitoring pros cons",
      "AC cloud monitoring privacy",
      "IoT HVAC remote diagnostics",
    ],
    short_answer:
      "Remote monitoring enables predictive maintenance, operational optimization, and remote diagnostics; it requires secure data handling and clarity on data ownership and retention.",
    long_answer:
      "Benefits include trend analysis, fault detection, and reduced truck rolls. Privacy/security considerations: encrypt data in transit and at rest, restrict access, and comply with local data-protection regulations. Define service-level expectations for alerts and remote action authority. Owners should require transparent vendor policies and the ability to export or delete data.",
    tags: ["remote", "IoT", "privacy"],
    safety: "",
    follow_up: [
      "What protocols ensure secure telemetry?",
      "Which metrics are most valuable remotely?",
    ],
    source_references: [],
  },
  {
    id: "hvac-failures-analysis-090",
    category: "service",
    canonical_question:
      "How do technicians perform root-cause analysis (RCA) on recurrent HVAC failures?",
    question_variations: [
      "HVAC failure root cause analysis",
      "How to diagnose recurring AC faults",
      "RCA process for HVAC problems",
    ],
    short_answer:
      "RCA combines symptom logging, trend analysis, inspection, measurement, and testing against design criteria to identify underlying causes rather than treating symptoms.",
    long_answer:
      "Effective RCA includes collecting service history and operational logs, reproducing the failure mode where safe, measuring electrical/refrigerant/airflow parameters, and comparing against design/commissioning records. Use fishbone diagrams to map contributors (environmental, operational, design, maintenance). Implement corrective actions targeting root causes and monitor the result to verify resolution.",
    tags: ["service", "diagnostics", "RCA"],
    safety: "",
    follow_up: [
      "Sample RCA worksheet",
      "How long to monitor after corrective action?",
    ],
    source_references: [],
  },
  {
    id: "ac-energy-modeling-091",
    category: "efficiency",
    canonical_question:
      "How can energy modeling predict savings from AC upgrades?",
    question_variations: [
      "Modeling savings for new AC",
      "AC energy simulation tools",
      "How to calculate energy savings from SEER",
    ],
    short_answer:
      "Energy modeling uses building load profiles, equipment performance curves, and occupancy schedules to estimate annual savings and payback from efficiency upgrades.",
    long_answer:
      "Inputs include building envelope, internal gains, climate data, equipment COP/SEER curves, and control strategies. Tools ranging from simplified calculators to detailed hourly simulation (DOE-2, EnergyPlus) provide estimates for energy, demand, and lifecycle cost. Sensitivity analysis identifies high-impact measures. Accurate modeling supports rebate applications and investment decisions.",
    tags: ["modeling", "efficiency"],
    safety: "",
    follow_up: [
      "Which tools are suitable for residential modeling?",
      "How to validate model against utility bills?",
    ],
    source_references: [],
  },
  {
    id: "air-sealing-092",
    category: "building-interaction",
    canonical_question:
      "How does building air leakage influence AC sizing and performance?",
    question_variations: [
      "Effect of air leakage on AC",
      "Do drafty houses need bigger AC",
      "How leakage affects cooling load",
    ],
    short_answer:
      "Air leakage increases cooling load and can lead to oversized equipment if not accounted for; air sealing reduces load and improves comfort and humidity control.",
    long_answer:
      "Uncontrolled infiltration increases latent and sensible loads, causing longer runtimes and discomfort. Proper envelope sealing, insulation, and controlled ventilation reduce peak loads and enable smaller, more efficient equipment. During load calculations, include measured or estimated infiltration rates (ACH) for accurate sizing.",
    tags: ["building", "sizing", "efficiency"],
    safety: "",
    follow_up: [
      "How to measure natural infiltration?",
      "Does sealing require mechanical ventilation?",
    ],
    source_references: [],
  },
  {
    id: "hvac-duct-sealing-093",
    category: "installation",
    canonical_question:
      "What methods and materials are recommended for long-term duct sealing?",
    question_variations: [
      "Duct sealing methods",
      "Best tape for ducts",
      "Mastic vs tape duct sealing",
      "How to properly seal duct joints",
    ],
    short_answer:
      "Use UL-classified mastic and mesh for permanent seals; specialized foil tapes are acceptable for certain applications; avoid standard cloth-backed duct tape for long-term sealing.",
    long_answer:
      "Mastic sealant combined with fiberglass mesh provides a durable, low-leakage solution for joints and seams. Metal-backed foil tape with appropriate adhesive is acceptable on rigid ducts. Ensure surfaces are clean and dry before application. For large leaks or inaccessible ducts, consider professional reconditioning or replacement. Proper sealing improves efficiency and prevents conditioned air loss into unconditioned spaces.",
    tags: ["ductwork", "sealing", "installation"],
    safety: "",
    follow_up: [
      "How to test duct leakage?",
      "Is aerosol sealing effective?",
    ],
    source_references: [],
  },
  {
    id: "ac-sound-attenuation-094",
    category: "acoustics",
    canonical_question:
      "What strategies reduce audible noise from HVAC equipment in occupied spaces?",
    question_variations: [
      "Reduce HVAC noise indoors",
      "Noise control for AC units",
      "How to soundproof AC outdoor unit",
    ],
    short_answer:
      "Use larger, slower fans, install acoustic barriers/enclosures, apply vibration isolation, and select quieter equipment to reduce noise levels.",
    long_answer:
      "Acoustic treatment considers source reduction (specifying low-SPL equipment), path attenuation (barriers, louvers, mass-loaded materials), and receiver protection (room acoustics). For outdoor units, install louvered screens with airflow allowances and acoustic absorbers; ensure fans are balanced and bearings serviced. Always evaluate thermal performance to avoid compromising heat rejection when adding enclosures.",
    tags: ["noise", "acoustics", "installation"],
    safety: "",
    follow_up: [
      "How to size an acoustic enclosure?",
      "Do enclosures affect cooling capacity?",
    ],
    source_references: [],
  },
  {
    id: "hvac-inflation-impact-095",
    category: "economics",
    canonical_question:
      "How do component cost inflation and supply-chain constraints affect HVAC repair vs replacement decisions?",
    question_variations: [
      "Should I replace AC due to parts cost",
      "Supply chain effects on HVAC",
      "When parts cost makes replacement better",
    ],
    short_answer:
      "Rising parts costs and lead times can make replacement economically preferable to repeated repairs — evaluate using total cost of ownership and expected service life.",
    long_answer:
      "Analyze repair cost, lead time, and downtime risk compared with replacement cost, improved efficiency, and warranty. High lead times for specialty components increase downtime risk; in such cases, replacement with modern, available equipment may be preferred. Consider energy savings and potential rebates in the financial analysis.",
    tags: ["economics", "replacement", "supply-chain"],
    safety: "",
    follow_up: [
      "How to perform lifecycle cost comparison?",
      "Are spare parts stock strategies recommended?",
    ],
    source_references: [],
  },
  {
    id: "ac-mobile-app-integration-096",
    category: "controls",
    canonical_question:
      "What should installers consider when integrating AC systems with mobile control apps?",
    question_variations: [
      "AC app integration best practices",
      "Smart AC app setup",
      "Security for AC mobile control",
    ],
    short_answer:
      "Ensure secure authentication, reliable API connectivity, compatibility with control sequences, and clear owner authorization for remote actions.",
    long_answer:
      "Design integration to prevent unsafe remote changes (e.g., disabling safety interlocks), implement two-factor authentication, and provide robust offline behavior. Document control authority and escalation procedures. Validate that app commands map correctly to manufacturer control modes to avoid equipment stress.",
    tags: ["IoT", "security", "controls"],
    safety: "",
    follow_up: [
      "Which communication protocols are secure?",
      "How to restrict remote control for guests?",
    ],
    source_references: [],
  },
  {
    id: "ac-weatherproofing-097",
    category: "installation",
    canonical_question:
      "What practices protect outdoor condensers from weather-related damage?",
    question_variations: [
      "Protect AC outdoor unit from rain",
      "Winter weather protection condenser",
      "Outdoor unit weatherproofing tips",
    ],
    short_answer:
      "Provide adequate clearance, use breathable covers only when unit is idle for extended periods, elevate units above flood or snow levels, and protect electrical components from direct precipitation.",
    long_answer:
      "Avoid airtight covers that trap moisture; instead use breathable covers for prolonged inactivity. Elevate units in flood-prone or heavy-snow areas and provide robust electrical enclosures with proper ingress protection ratings. Maintain airflow clearance and secure mounting to resist wind uplift. For coastal installations, specify corrosion-resistant coatings and stainless fasteners.",
    tags: ["installation", "durability"],
    safety: "",
    follow_up: [
      "What IP rating for outdoor enclosures?",
      "How to protect from salt spray?",
    ],
    source_references: [],
  },
  {
    id: "ac-coil-materials-098",
    category: "parts",
    canonical_question:
      "What are common coil materials and their trade-offs (copper vs aluminum)?",
    question_variations: [
      "Copper vs aluminum coils",
      "Which coil material best",
      "Coil corrosion resistance copper aluminium",
    ],
    short_answer:
      "Copper offers superior thermal conductivity and ease of repair; aluminum offers lighter weight and lower cost but can be more vulnerable to certain corrosive environments unless coated.",
    long_answer:
      "Copper-tube/aluminum-fin constructions balance performance and cost; all-aluminum coils reduce brazing complexity and material costs but may need coatings in aggressive environments. Coating and cathodic protection strategies mitigate corrosion. Consider serviceability and local environmental exposure when selecting coil materials.",
    tags: ["coils", "materials", "corrosion"],
    safety: "",
    follow_up: [
      "When to prefer coated coils?",
      "Can aluminium coils be repaired in-field?",
    ],
    source_references: [],
  },
  {
    id: "ac-thermal-expansion-099",
    category: "diagnostics",
    canonical_question:
      "How does thermal expansion and contraction affect refrigerant piping and components over time?",
    question_variations: [
      "Piping expansion AC",
      "Thermal stress refrigerant lines",
      "Why piping leaks over time",
    ],
    short_answer:
      "Thermal cycling induces mechanical stress at joints and supports, potentially causing fatigue, stress fractures, or loosened brazes; accommodate movement with loops and flexible supports.",
    long_answer:
      "Design piping runs with expansion loops, proper support spacing, and materials tolerant of differential thermal expansion. Avoid rigid anchor points that transmit thermal stress to brazed joints. Periodic inspection of supports and joints helps detect fatigue before leakage occurs.",
    tags: ["piping", "reliability", "design"],
    safety: "",
    follow_up: [
      "How to design an expansion loop?",
      "What support spacing is recommended for lines?",
    ],
    source_references: [],
  },
  {
    id: "ac-thermal-bridging-100",
    category: "building-interaction",
    canonical_question:
      "What is thermal bridging in HVAC penetrations and how does it affect performance?",
    question_variations: [
      "Thermal bridging at AC penetrations",
      "How penetrations affect insulation",
      "Seal HVAC piping thermal bridge",
    ],
    short_answer:
      "Thermal bridging occurs where conductive elements penetrate the envelope, creating heat transfer paths; it reduces insulation effectiveness and can cause condensation and energy loss.",
    long_answer:
      "Minimize bridging by using thermal breaks where piping or supports cross insulated assemblies and by sealing penetrations with appropriate fire- and vapor-rated materials. Addressing bridging improves overall thermal performance and reduces condensation risk at colder surfaces.",
    tags: ["building", "thermal", "installation"],
    safety: "",
    follow_up: [
      "What materials make effective thermal breaks?",
      "Do supports need thermal isolation?",
    ],
    source_references: [],
  },
  {
    id: "air-balancing-tools-101",
    category: "service",
    canonical_question:
      "Which instruments are essential for a professional air-balancing and testing service?",
    question_variations: [
      "Tools for air balancing",
      "What instruments measure airflow",
      "Air balancing equipment list",
    ],
    short_answer:
      "Essential instruments include a calibrated flow hood, vane anemometer, manometer for static pressure, psychrometer for humidity, and temperature probes.",
    long_answer:
      "A flow hood provides direct register CFM readings; vane anemometers and hot-wire probes are alternatives for certain applications. Manometers measure static pressure across coils and filters. Psychrometers and accurate thermistors capture humidity and temperature for psychrometric analysis. Data loggers and balancing software streamline reporting.",
    tags: ["tools", "testing", "service"],
    safety: "",
    follow_up: [
      "How often calibrate these tools?",
      "Can a smartphone measure airflow?",
    ],
    source_references: [],
  },
  {
    id: "hvac-greenhouse-gases-102",
    category: "policy",
    canonical_question:
      "How do HVAC refrigerants contribute to greenhouse gas emissions and what mitigation options exist?",
    question_variations: [
      "Refrigerant greenhouse gas impact",
      "Options to reduce refrigerant GWP",
      "Low-GWP alternatives HVAC",
    ],
    short_answer:
      "Certain refrigerants have high global warming potential (GWP); mitigation includes adopting low-GWP refrigerants, minimizing leaks, recovering refrigerants, and procuring high-efficiency equipment.",
    long_answer:
      "Mitigation strategies combine refrigerant selection (R-32, hydrocarbons where permitted, low-GWP blends), robust leak-detection and maintenance, and end-of-life recovery and reclamation. System design emphasizing low charge and improved heat-transfer efficiency also reduces climate impact. Regulatory programs often incentivize lower-GWP solutions.",
    tags: ["refrigerant", "environment", "policy"],
    safety:
      "Some low-GWP refrigerants are flammable and require appropriate safety measures.",
    follow_up: [
      "What are typical low-GWP refrigerants?",
      "How to measure refrigerant leakage rate?",
    ],
    source_references: [],
  },
  {
    id: "ac-safety-standards-103",
    category: "safety",
    canonical_question:
      "Which safety standards and codes commonly apply to residential and light-commercial AC installations?",
    question_variations: [
      "HVAC safety codes to follow",
      "Standards for AC installation",
      "What codes govern refrigerant handling",
    ],
    short_answer:
      "Applicable standards include local building and electrical codes, manufacturer installation manuals, and regional refrigerant handling regulations; refer to national standards (e.g., NEC, ASHRAE) as applicable.",
    long_answer:
      "Installers must comply with electrical codes for disconnects and grounding, building code requirements for penetrations and condensate discharge, and environmental regulations for refrigerant handling and disposal. Manufacturer instructions are part of compliance for warranty and safe operation. Maintain documentation and certifications for regulatory inspections.",
    tags: ["codes", "safety", "compliance"],
    safety: "",
    follow_up: [
      "Where to find local code requirements?",
      "Which certifications are required for refrigerant work?",
    ],
    source_references: [],
  },
  {
    id: "hvac-training-104",
    category: "professional-development",
    canonical_question:
      "What competencies should technicians possess to service modern inverter-driven AC systems?",
    question_variations: [
      "Training for inverter AC service",
      "Skills needed for modern HVAC technicians",
      "What to learn for inverter systems",
    ],
    short_answer:
      "Technicians require knowledge of variable-frequency drives, controls, electrical diagnostics, refrigerant charging methods (superheat/subcooling), and data-logging interpretation.",
    long_answer:
      "Training should include safe handling of high-voltage electronics, use of digital instruments, commissioning procedures for variable-speed equipment, control integration, and manufacturer-specific diagnostics. Continuous education on refrigerant regulations and new refrigerants is essential. Practical field experience under mentorship accelerates proficiency.",
    tags: ["training", "skills", "professional"],
    safety: "",
    follow_up: [
      "Recommended certification paths?",
      "Are manufacturer courses necessary?",
    ],
    source_references: [],
  },
  {
    id: "ac-retrocommissioning-105",
    category: "service",
    canonical_question:
      "What is retrocommissioning and when is it appropriate for existing AC systems?",
    question_variations: [
      "Retrocommissioning HVAC processes",
      "When to retrocommission AC",
      "Benefits of retrocommissioning",
    ],
    short_answer:
      "Retrocommissioning systematically optimizes existing systems by verifying controls, restoring design intent, and identifying low-cost operational improvements; suitable for systems with degraded performance or high energy use.",
    long_answer:
      "The process includes baseline measurements, inspection, control tuning, and implementation of corrective actions such as setpoint optimization, sensor recalibration, and scheduling adjustments. Energy savings and comfort improvements justify the effort, particularly in commercial settings with complex control sequences.",
    tags: ["retrocommissioning", "optimization"],
    safety: "",
    follow_up: [
      "How to scope a retrocommissioning project?",
      "Typical payback for retrocommissioning?",
    ],
    source_references: [],
  },
  {
    id: "ac-resilience-planning-106",
    category: "design",
    canonical_question:
      "How should HVAC systems be planned to maintain resilience during extreme weather or grid disruptions?",
    question_variations: [
      "HVAC resilience strategies",
      "Design AC for heat waves",
      "Backup power for AC systems",
    ],
    short_answer:
      "Design for redundancy, prioritize critical zones, consider backup power or load-shedding strategies, and incorporate passive cooling and shading to reduce dependency on mechanical cooling.",
    long_answer:
      "Resilient design includes backup generation or battery systems sized for critical loads, demand-response strategies to manage limited power, and passive measures (insulation, shading, thermal mass) to reduce peak loads. Prioritize life-safety spaces and critical equipment for conditioned backup. Resilience planning should align with local climate risk assessments.",
    tags: ["resilience", "design", "planning"],
    safety: "",
    follow_up: [
      "How to size battery backup for AC?",
      "What passive measures are most effective?",
    ],
    source_references: [],
  },
  {
    id: "hvac-commissioning-check-107",
    category: "commissioning",
    canonical_question:
      "Which KPIs should be recorded during commissioning to demonstrate acceptable performance?",
    question_variations: [
      "KPIs for HVAC commissioning",
      "What metrics to document HVAC startup",
      "Commissioning key performance indicators",
    ],
    short_answer:
      "Record supply/return temps, delta-T, airflow CFM, refrigerant pressures, superheat/subcooling, electrical currents, and system cycle times under representative loads.",
    long_answer:
      "KPIs provide quantitative evidence of performance and are used to verify warranty and contractor obligations. Include ambient conditions and test instrument calibration notes. Retain raw data and summarized reports for owner handover and future troubleshooting.",
    tags: ["commissioning", "KPIs", "documentation"],
    safety: "",
    follow_up: [
      "What acceptance thresholds are typical?",
      "How to archive KPI data safely?",
    ],
    source_references: [],
  },
  {
    id: "ac-filter-change-alerts-108",
    category: "maintenance",
    canonical_question:
      "How can filter-change intervals be optimized using objective measurements rather than fixed schedules?",
    question_variations: [
      "Filter change based on pressure drop",
      "Dynamic filter replacement schedule",
      "When to change AC filter dynamically",
    ],
    short_answer:
      "Use differential-pressure sensors to monitor pressure drop across filters and replace when the measured value exceeds manufacturer-specified thresholds, accounting for environment and occupancy.",
    long_answer:
      "Fixed schedules may be wasteful or insufficient. Differential monitoring provides objective evidence of loading and supports predictive maintenance. Combine DP data with occupancy and IAQ metrics to optimize lifecycle cost and maintain performance. Validate sensor calibration periodically.",
    tags: ["maintenance", "sensors", "optimization"],
    safety: "",
    follow_up: [
      "Recommended DP setpoints for MERV ratings?",
      "How to install DP sensors correctly?",
    ],
    source_references: [],
  },
  {
    id: "ac-thermal-comfort-109",
    category: "comfort",
    canonical_question:
      "What parameters define thermal comfort and how should AC operation be adjusted to optimize it?",
    question_variations: [
      "Thermal comfort factors",
      "How to set AC for comfort",
      "Temperature and humidity for comfort",
    ],
    short_answer:
      "Thermal comfort depends on air temperature, mean radiant temperature, relative humidity, airspeed, clothing, and metabolic rate; adjust temperature/humidity and air distribution to meet occupant needs.",
    long_answer:
      "ASHRAE thermal comfort models (PMV/PPD) quantify comfort; practical strategies include maintaining temperature setpoints within recommended ranges, controlling humidity (40–60% preferred), providing gentle air movement to increase comfort, and ensuring radiative balance (mitigating hot/cold surfaces). Engage occupants during commissioning to calibrate setpoints.",
    tags: ["comfort", "ASHRAE", "controls"],
    safety: "",
    follow_up: [
      "What PMV/PPD target to design for?",
      "Does increasing fan speed improve comfort?",
    ],
    source_references: [],
  },
  {
    id: "ac-leak-detection-110",
    category: "diagnostics",
    canonical_question:
      "Which methods are effective for detecting refrigerant leaks in HVAC systems?",
    question_variations: [
      "How to find refrigerant leak",
      "Leak detection methods HVAC",
      "Electronic leak detector vs soap test",
    ],
    short_answer:
      "Use electronic halogen/infrared leak detectors, soap-bubble testing for visible joints, UV dye tracing for low-rate leaks, and pressure-decay or bubble tests for larger leaks.",
    long_answer:
      "Select a detection method suited to expected leak rate and access constraints. Electronic detectors provide rapid screening; UV dye helps localize slow leaks after charging; pressure decay can confirm system tightness during vacuum tests. Document leak locations and repair procedures; re-test after repair and recovery operations to confirm integrity.",
    tags: ["leak-detection", "refrigerant", "diagnostics"],
    safety:
      "Ensure safe ventilation when testing for refrigerant and follow manufacturer detector calibration procedures.",
    follow_up: [
      "How sensitive are modern leak detectors?",
      "When to use tracer gas detection?",
    ],
    source_references: [],
  },
  {
    id: "ac-service-agreements-111",
    category: "service",
    canonical_question:
      "What elements should a comprehensive HVAC service agreement include?",
    question_variations: [
      "What to include in maintenance contract",
      "HVAC service agreement checklist",
      "Preventive maintenance contract components",
    ],
    short_answer:
      "Service agreements should define scope (inspections, cleaning, testing), scheduling, response times for faults, parts/labor coverage, performance KPIs, and record-keeping responsibilities.",
    long_answer:
      "Include preventive maintenance frequency, emergency response SLAs, parts discount or coverage terms, warranty handling procedures, invoicing cadence, and termination clauses. Specify documentation deliverables (inspection reports, KPI logs) and compliance requirements for safety and environmental regulations.",
    tags: ["service", "contracts", "maintenance"],
    safety: "",
    follow_up: [
      "Sample PM contract template",
      "What is typical SLA response time?",
    ],
    source_references: [],
  },
  {
    id: "ac-airflow-improvements-112",
    category: "efficiency",
    canonical_question:
      "What practical steps increase system airflow without major redesign?",
    question_variations: [
      "How to improve AC airflow quickly",
      "Increase CFM without ductwork change",
      "Airflow optimization tips",
    ],
    short_answer:
      "Clean or replace filters, clean blower and coils, open or adjust dampers, remove register obstructions, and verify blower speed settings.",
    long_answer:
      "Start with basic maintenance: filters and coils. Check blower wheel for dust and correct wheel orientation. Verify motor and drive settings; some systems allow provisioning step-up via ECM programming. Balance registers and avoid excessive return restriction. Where practical, adjust grille geometry or upgrade blower components to improve CFM within design limits.",
    tags: ["airflow", "maintenance", "optimization"],
    safety: "",
    follow_up: [
      "How much can airflow increase after cleaning?",
      "When to consider duct resizing?",
    ],
    source_references: [],
  },
  {
    id: "ac-zone-control-113",
    category: "controls",
    canonical_question:
      "What are common approaches to implement zone control in residential HVAC?",
    question_variations: [
      "How to implement HVAC zoning",
      "Residential zone control options",
      "Dampers vs multiple units zoning",
    ],
    short_answer:
      "Use motorized dampers with zone thermostats and a central control panel, or deploy multiple ductless indoor units for independent zone control; ensure equipment and controls are compatible.",
    long_answer:
      "Zoning with dampers requires proper sequencing, actuator selection, and static-pressure management; variable-speed equipment pairs well with zoning. Ductless mini-splits provide inherently zoned solutions with lower ductwork impact. Evaluate insulation and thermal loads per zone to avoid short-cycling and ensure comfort.",
    tags: ["zoning", "controls", "design"],
    safety: "",
    follow_up: [
      "Can zoning reduce energy bills?",
      "How to prevent high static pressure with zoning?",
    ],
    source_references: [],
  },
  {
    id: "ac-reservoir-cleaning-114",
    category: "maintenance",
    canonical_question:
      "How should condensate pans and drain reservoirs be maintained to prevent microbial growth?",
    question_variations: [
      "Cleaning condensate pans",
      "Prevent mold in drain pan",
      "How to sanitize AC drain pan",
    ],
    short_answer:
      "Regularly inspect and clean pans with appropriate cleaners, ensure positive drainage, and consider UV-C treatment or biocide tablets where recommended.",
    long_answer:
      "Remove standing water and debris, scrub with non-corrosive cleaners, and verify drain line integrity. In high-risk situations use UV-C or EPA-registered biocides per manufacturer guidance. Replace corroded pans and repair pooling issues. Maintain records of cleaning intervals.",
    tags: ["maintenance", "cleaning", "microbial"],
    safety: "Follow product safety data sheets for cleaning chemicals.",
    follow_up: [
      "What cleaners are safe for aluminum pans?",
      "Are biocide tablets effective long-term?",
    ],
    source_references: [],
  },
  {
    id: "ac-seasonal-adjustments-115",
    category: "maintenance",
    canonical_question:
      "What seasonal adjustments should be made to maximize AC efficiency across summer and shoulder seasons?",
    question_variations: [
      "Preparing AC for summer",
      "Seasonal tune-up AC spring fall",
      "Adjust AC settings for shoulder seasons",
    ],
    short_answer:
      "Perform pre-season inspection, clean coils and filters, check refrigerant and electricals, adjust thermostat schedules, and verify condensate drainage.",
    long_answer:
      "Before summer, ensure condenser clearance, test under load, and calibrate controls. During shoulder seasons, adjust programmable schedules for varying occupancy and exploit natural ventilation when conditions permit. Ensure humidity control remains effective and change filters frequently during high-use periods.",
    tags: ["seasonal", "maintenance"],
    safety: "",
    follow_up: [
      "When to schedule annual service?",
      "How to program thermostats for season transitions?",
    ],
    source_references: [],
  },
  {
    id: "ac-sensor-calibration-116",
    category: "diagnostics",
    canonical_question:
      "How often should sensors (temperature, pressure) be calibrated and how is it documented?",
    question_variations: [
      "Sensor calibration frequency HVAC",
      "How to calibrate temperature sensors",
      "Calibration documentation for HVAC sensors",
    ],
    short_answer:
      "Calibrate critical sensors annually or per manufacturer recommendations; document calibration date, method, and results in service records.",
    long_answer:
      "Calibration frequency depends on sensor criticality and operating conditions; high-use or critical control sensors may require more frequent checks. Use calibrated reference instruments and maintain traceable calibration records. Include sensor IDs and correction factors in system documentation.",
    tags: ["calibration", "sensors"],
    safety: "",
    follow_up: [
      "What tolerance is acceptable for room sensors?",
      "How to store calibration certificates?",
    ],
    source_references: [],
  },
  {
    id: "ac-service-data-analytics-117",
    category: "service",
    canonical_question:
      "How can analytics on service data improve long-term reliability and reduce costs?",
    question_variations: [
      "Service data analytics for HVAC",
      "Predictive maintenance HVAC analytics",
      "Use of service logs to reduce failures",
    ],
    short_answer:
      "Aggregate and analyze operational and service data to identify trends, predict failures, schedule targeted maintenance, and optimize spare-part inventory.",
    long_answer:
      "Use analytics to detect drift in performance (e.g., rising head pressures or decreasing airflow), correlate failures with operating conditions, and implement predictive maintenance. This reduces reactive repairs, extends asset life, and lowers lifecycle costs. Ensure data quality and integrate with CMMS for actionability.",
    tags: ["analytics", "predictive-maintenance"],
    safety: "",
    follow_up: [
      "What KPIs indicate impending compressor failure?",
      "How to integrate analytics with CMMS?",
    ],
    source_references: [],
  },
  {
    id: "ac-environmental-controls-118",
    category: "controls",
    canonical_question:
      "How can AC controls be tuned to reduce energy while maintaining acceptable comfort?",
    question_variations: [
      "Control strategies to save energy",
      "Setpoint optimization HVAC",
      "Reducing energy with thermostat control",
    ],
    short_answer:
      "Use setback schedules, adaptive control algorithms, setback limits for humidity, and occupancy-based controls while monitoring comfort metrics to avoid occupant dissatisfaction.",
    long_answer:
      "Implement banded setpoints rather than aggressive changes, apply demand-limiting during peak periods, and use occupancy sensing or geofencing for dynamic setpoints. Maintain minimum ventilation and humidity thresholds to preserve IAQ. Validate control changes with occupant feedback and metric monitoring.",
    tags: ["controls", "efficiency"],
    safety: "",
    follow_up: [
      "What setback schedule balances comfort and savings?",
      "Can control changes affect warranty?",
    ],
    source_references: [],
  },
  {
    id: "ac-commissioning-reports-119",
    category: "documentation",
    canonical_question:
      "What content should be included in a complete commissioning report handed to the owner?",
    question_variations: [
      "What to include in commissioning report",
      "Commissioning report checklist",
      "Owner handover commissioning document",
    ],
    short_answer:
      "Include test data (temperatures, pressures, currents), equipment serial numbers, component adjustments, system diagrams, control sequences, and maintenance recommendations.",
    long_answer:
      "Provide raw data and summarized acceptance results, list of deviations and corrective actions, as-built changes, and operating instructions. Include warranty and service contact information. Store digital reports in an accessible, backed-up format for future reference.",
    tags: ["reports", "commissioning", "documentation"],
    safety: "",
    follow_up: [
      "Sample commissioning report template",
      "How to present KPI trends?",
    ],
    source_references: [],
  },
  {
    id: "ac-legal-considerations-120",
    category: "policy",
    canonical_question:
      "What legal and contractual considerations should owners and contractors address for HVAC projects?",
    question_variations: [
      "HVAC contract considerations",
      "Liability and warranty HVAC projects",
      "Legal issues in AC installation contracts",
    ],
    short_answer:
      "Clarify scope, warranty terms, performance guarantees, liability limits, change-order procedures, and acceptance criteria in written contracts before work begins.",
    long_answer:
      "Include clear definitions of deliverables, commissioning acceptance tests, maintenance obligations, parts warranties, and dispute-resolution mechanisms. Record as-built modifications and keep communication logs. Contractors should maintain appropriate insurance; owners should verify credentials and references.",
    tags: ["contracts", "legal", "policy"],
    safety: "",
    follow_up: [
      "What warranty clauses are standard?",
      "How to document change orders professionally?",
    ],
    source_references: [],
  },
];
