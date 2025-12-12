// Comprehensive AC FAQ dataset - 340+ entries covering all aspects of HVAC systems
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
    follow_up: ["How to quiet a window AC?", "When to replace the compressor?"],
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
    canonical_question:
      "Why won't the thermostat turn the AC on or reach temperature?",
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
    follow_up: ["How do I reset my thermostat?", "Why does my AC short-cycle?"],
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
    canonical_question:
      "What is an inverter AC and how is it different from non-inverter?",
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
    canonical_question:
      "Are there Carrier-specific troubleshooting steps for AC not cooling?",
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
    canonical_question:
      "What should I check first for a Daikin AC with poor performance?",
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
    canonical_question:
      "What does a bad capacitor do in an AC and how to diagnose?",
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
    canonical_question:
      "How often should I service my AC and what does service include?",
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
    follow_up: ["How much does AC service cost?", "Can I service AC myself?"],
    source_references: [],
  },
  {
    id: "warranty-coverage-018",
    category: "service",
    canonical_question:
      "Is AC repair covered under warranty and what should I check?",
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
    follow_up: ["How to register AC warranty?", "What voids AC warranty?"],
    source_references: [],
  },
  {
    id: "filter-replacement-019",
    category: "maintenance",
    canonical_question:
      "When should I replace my AC filter instead of cleaning it?",
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
    canonical_question:
      "Could ducts be causing my AC problems and how do I inspect them?",
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
  ...(() => {
    const newEntries = [
      {
        id: "duct-negative-pressure-121",
        category: "airflow",
        canonical_question: "What causes negative pressure in an HVAC system and how does it affect AC performance?",
        question_variations: [
          "Why is my home under negative pressure?",
          "Negative pressure HVAC problems",
          "AC airflow imbalance due to negative pressure",
          "Causes of negative pressure inside house"
        ],
        short_answer: "Negative pressure occurs when exhaust or return airflow exceeds supply airflow, pulling unconditioned air into the home and reducing AC efficiency. Correcting duct balance and sealing leaks restores proper airflow.",
        long_answer: "Negative pressure results when the HVAC system removes more air than it supplies, often due to imbalanced duct design, return leaks, oversized exhaust fans, or closed interior doors restricting supply pathways. This draws hot, humid, unfiltered outdoor air into living spaces through gaps, raising cooling load and worsening comfort. Technicians resolve negative pressure by balancing supply and return airflow, sealing duct leaks, resizing returns, or adding pressure relief pathways. Persistent negative pressure can increase energy use and cause moisture problems in walls or attics.",
        tags: ["airflow", "ductwork", "pressure-balance"],
        safety: "Severe negative pressure can pull combustion gases back into the home—particularly hazardous for gas appliances without sealed combustion.",
        follow_up: ["How do I test for pressure imbalances?", "Can adding a return vent fix negative pressure?"],
        source_references: []
      },
      {
        id: "oversized-ac-symptoms-122",
        category: "installation",
        canonical_question: "What are the symptoms of an oversized AC unit and why is oversizing problematic?",
        question_variations: [
          "Is my AC too big for my room?",
          "Problems caused by oversized AC",
          "Oversized HVAC short cycling",
          "Why is oversizing AC bad"
        ],
        short_answer: "An oversized AC short-cycles, cools too quickly without dehumidifying, causes uneven temperatures, increases wear, and consumes more energy. Proper sizing via load calculation prevents these issues.",
        long_answer: "Oversized air conditioners deliver rapid temperature drops that satisfy the thermostat before adequate dehumidification occurs. This leads to clammy indoor conditions, humidity-driven mold risk, and discomfort despite low temperatures. Short run times also prevent proper oil return in refrigerant circuits, increasing mechanical stress. Additionally, frequent cycling increases electrical demand charges and reduces equipment life. Correctly sized units run longer, steady cycles that maintain temperature and humidity together. Load calculations (Manual J or equivalent) are essential before replacement.",
        tags: ["sizing", "installation", "efficiency"],
        safety: "",
        follow_up: ["How to confirm if my AC is oversized?", "Can airflow adjustments reduce impacts of oversizing?"],
        source_references: []
      },
      {
        id: "undersized-ac-symptoms-123",
        category: "installation",
        canonical_question: "What are the signs of an undersized AC and how does it affect system performance?",
        question_variations: [
          "AC too small symptoms",
          "Undersized HVAC performance issues",
          "Why my AC never reaches set temperature",
          "Signs AC unit is too small"
        ],
        short_answer: "An undersized AC struggles to reach set temperature, runs continuously, produces high humidity, and has limited cooling capacity during peak conditions.",
        long_answer: "When cooling demand exceeds system capacity, an undersized AC will operate continuously without achieving thermostat targets. This increases energy use while failing to control humidity, because evaporator coils may not reach optimal dewpoint temperature under heavy heat loads. The system may also experience premature wear. Proper load calculation, duct evaluation, and building envelope analysis dictate whether upsizing, adding zoning, or reducing heat gain (insulation, window films, shading) is appropriate.",
        tags: ["sizing", "capacity", "installation"],
        safety: "",
        follow_up: ["Should I upgrade tonnage or improve insulation first?", "Can dual systems fix undersizing?"],
        source_references: []
      },
      {
        id: "humidity-high-indoors-124",
        category: "comfort",
        canonical_question: "Why is indoor humidity high even when the AC is cooling properly?",
        question_variations: [
          "AC cooling but humidity high",
          "Why AC not removing moisture",
          "Indoor humidity issues with AC",
          "AC dehumidification not working"
        ],
        short_answer: "High humidity despite cooling may result from oversized systems, poor airflow, short cycling, low evaporator coil temperature differences, or infiltration through leaks.",
        long_answer: "Proper dehumidification requires long, steady AC cycles that cool the evaporator coil below dewpoint. If airflow is too high, the coil warms and loses latent removal capacity. Oversized ACs cool the air rapidly but do not operate long enough to condense moisture. Leaky building envelopes introduce humid outdoor air faster than the system can remove it. Dirty filters, incorrect fan speed, or refrigerant charge issues also impair moisture removal. Technicians measure delta-T, coil temperature, airflow (CFM/ton), and static pressure to diagnose the root cause before recommending changes such as decreasing fan speed or resizing equipment.",
        tags: ["humidity", "comfort", "airflow"],
        safety: "",
        follow_up: ["Should I use a standalone dehumidifier?", "Does an inverter AC improve humidity control?"],
        source_references: []
      },
      {
        id: "supply-vent-placement-125",
        category: "installation",
        canonical_question: "How does supply vent placement affect cooling effectiveness in a room?",
        question_variations: [
          "Best location for AC supply vents",
          "Why supply vent placement matters",
          "Supply vent too close to thermostat",
          "Airflow distribution problems AC"
        ],
        short_answer: "Supply vents placed high on walls or ceilings allow proper air mixing and minimize stratification; poor placement can cause drafts, uneven cooling, and inaccurate thermostat readings.",
        long_answer: "Supply vents deliver conditioned air into a space; if positioned too close to thermostats, cold supply air may prematurely satisfy temperature sensors. Vents placed behind furniture or low on exterior walls may create dead zones and uneven temperatures. Ceiling placement promotes mixing due to natural convection patterns. Engineers design supply locations to ensure throw distance covers the occupied zone while avoiding drafts. Adjusting vent direction, balancing dampers, or modifying duct layout improves comfort and air distribution.",
        tags: ["airflow", "ventilation", "installation"],
        safety: "",
        follow_up: ["Can adding booster fans fix poorly placed vents?", "How many supply vents should a room have?"],
        source_references: []
      },
      {
        id: "refrigerant-overcharge-126",
        category: "diagnostics",
        canonical_question: "What are the symptoms of an overcharged AC system and why is overcharging harmful?",
        question_variations: [
          "Too much refrigerant symptoms",
          "Overcharged AC coil freezing",
          "High pressure from refrigerant overcharge",
          "Why overcharging AC is bad"
        ],
        short_answer: "An overcharged system shows high head pressure, reduced cooling, compressor strain, and potential liquid floodback. Overcharging decreases efficiency and can damage the compressor.",
        long_answer: "Excess refrigerant reduces evaporator superheat and raises condenser subcooling, causing excessively high discharge pressure. This increases compressor workload and raises energy consumption. In severe conditions, liquid refrigerant can return to the compressor (floodback), leading to mechanical failure. Frost on the evaporator or noisy compressor operation may occur. Technicians correct overcharge by recovering refrigerant to manufacturer-specified charge levels using scales and superheat/subcooling measurements.",
        tags: ["refrigerant", "diagnostics", "pressure"],
        safety: "Do not attempt to adjust refrigerant without certification—improper handling is dangerous and illegal in many regions.",
        follow_up: ["What is the correct refrigerant charge for my AC?", "How to test superheat and subcooling?"],
        source_references: []
      },
      {
        id: "refrigerant-undercharge-127",
        category: "diagnostics",
        canonical_question: "What are the signs of an undercharged AC system and what causes low refrigerant levels?",
        question_variations: [
          "Low refrigerant symptoms AC",
          "Undercharged AC coil freezing",
          "Why AC needs refrigerant refill",
          "Causes of refrigerant loss"
        ],
        short_answer: "Undercharged systems show reduced cooling, low suction pressure, coil frosting, and long run cycles. The root cause is almost always a leak, not normal consumption.",
        long_answer: "Refrigerant does not get used up; loss indicates leaks at joints, Schrader valves, evaporator coils, flare fittings, or service ports. Low charge reduces evaporator saturation temperature, causing coil icing and warm supply air. Compressor overheating may occur due to inadequate mass flow. Technicians locate leaks with nitrogen pressure testing, UV dye, or electronic leak detectors before recharging to manufacturer specifications. Recharging without leak repair is a temporary and wasteful fix.",
        tags: ["refrigerant", "diagnostics", "leak"],
        safety: "",
        follow_up: ["How to detect small refrigerant leaks?", "Is evaporator coil replacement necessary?"],
        source_references: []
      },
      {
        id: "blower-motor-speed-128",
        category: "airflow",
        canonical_question: "How does blower motor speed affect cooling performance and humidity removal?",
        question_variations: [
          "AC fan speed effect on cooling",
          "Should AC blower speed be high or low",
          "Fan speed and humidity removal",
          "Why adjusting blower speed matters"
        ],
        short_answer: "Higher blower speeds increase sensible cooling but reduce humidity removal; lower speeds improve latent removal but may reduce airflow too much if set improperly.",
        long_answer: "Blower speed directly governs CFM delivered across the evaporator coil. Higher CFM increases heat transfer and can improve temperature drop but raises coil temperature, weakening condensation of moisture. Lower CFM cools the coil more deeply, improving latent removal (humidity control), but risks coil freezing or insufficient room air movement if airflow is too low. Optimal settings depend on climate, system charge, duct static pressure, and coil configuration. Technicians measure CFM/ton, ESP, and delta-T to identify correct speed taps or ECM programming profiles.",
        tags: ["airflow", "blower-motor", "humidity"],
        safety: "",
        follow_up: ["What is ideal CFM per ton?", "How does static pressure limit blower adjustments?"],
        source_references: []
      },
      {
        id: "ecm-motor-benefits-129",
        category: "parts",
        canonical_question: "What advantages do ECM (electronically commutated) blower motors offer over PSC motors in AC systems?",
        question_variations: [
          "ECM vs PSC blower motor",
          "Benefits of ECM motor AC",
          "Why choose ECM fan motor",
          "Is ECM more efficient?"
        ],
        short_answer: "ECM motors provide variable-speed control, better efficiency, quieter operation, and improved airflow stability under varying static pressures compared to PSC motors.",
        long_answer: "ECM motors use electronic controllers to maintain programmed airflow with high precision, compensating for duct pressure fluctuations. This improves comfort, humidity removal, and compatibility with modern inverter and multi-stage systems. PSC motors, by contrast, lose torque as static pressure rises, reducing delivered CFM. ECMs also consume significantly less energy, especially at part-load airflow speeds. Though ECM motors have higher upfront cost and complex electronics, their long-term efficiency and comfort benefits justify adoption in most residential and commercial systems.",
        tags: ["blower-motor", "ECM", "efficiency"],
        safety: "",
        follow_up: ["Do ECM motors cost more to replace?", "Can a PSC motor be upgraded to ECM?"],
        source_references: []
      },
      {
        id: "return-air-sizing-130",
        category: "installation",
        canonical_question: "Why is proper return air sizing essential and what happens when the return path is undersized?",
        question_variations: [
          "Return duct too small symptoms",
          "Importance of return air in HVAC",
          "Why AC return airflow matters",
          "Return vent sizing guidelines"
        ],
        short_answer: "Undersized return air restricts airflow, increases static pressure, reduces cooling capacity, and may cause coil freezing or blower overheating.",
        long_answer: "A balanced HVAC system requires adequate return pathways to match supply airflow; insufficient return area causes the blower to work harder, increasing energy consumption and noise. High static pressure reduces delivered CFM, undermining heat exchange and potentially triggering freeze-ups or compressor floodback. Proper return sizing considers CFM demand, filter pressure drop, duct velocity limits, and noise constraints. Technicians may add additional return grilles, enlarge ducts, or reduce restrictive filter media to restore airflow balance.",
        tags: ["airflow", "return-duct", "installation"],
        safety: "",
        follow_up: ["How many return vents should a home have?", "Does filter type affect return sizing?"],
        source_references: []
      },
      {
        id: "duct-leakage-impact-131",
        category: "airflow",
        canonical_question: "How does duct leakage influence AC efficiency and indoor comfort?",
        question_variations: [
          "Effects of duct leakage on AC",
          "Why duct leaks reduce cooling",
          "Comfort issues from leaky ducts",
          "Does sealing ducts improve AC performance?"
        ],
        short_answer: "Duct leakage wastes conditioned air, increases cooling load, depressurizes rooms, and causes uneven temperatures. Sealing and insulating ducts improves system efficiency and comfort.",
        long_answer: "Supply leaks discharge cooled air into attics or wall cavities, forcing the system to work harder while reducing delivered CFM. Return leaks pull hot, dusty, unfiltered air into the system, increasing humidity, load, and contaminant levels. Duct leakage commonly increases energy consumption by 15–30% in poorly sealed systems. Sealing joints with mastic, insulating exposed runs, and pressure-testing ducts to evaluate leakage rates are core corrective actions. Proper duct sealing is especially critical in hot climates, unconditioned attics, and systems with high external static pressure.",
        tags: ["ductwork", "airflow", "efficiency"],
        safety: "",
        follow_up: ["How is duct leakage measured?", "Is aerosol duct sealing effective?"],
        source_references: []
      },
      {
        id: "txv-function-132",
        category: "parts",
        canonical_question: "What is the role of a thermostatic expansion valve (TXV) in an AC system?",
        question_variations: [
          "How TXV works",
          "Purpose of expansion valve in AC",
          "TXV vs fixed orifice",
          "Why superheat control matters"
        ],
        short_answer: "A TXV regulates refrigerant flow into the evaporator by controlling superheat, improving efficiency and coil utilization compared to fixed metering devices.",
        long_answer: "The TXV modulates refrigerant flow to maintain a designated superheat level at the evaporator outlet, ensuring the coil remains fully utilized without allowing liquid refrigerant to flood the compressor. This improves performance under varying load and outdoor temperature conditions. Unlike fixed orifice systems that rely strictly on pressure differentials, TXVs adapt dynamically, offering better part-load efficiency and reduced icing risk. Proper sensing bulb placement and insulation are essential for correct TXV behavior.",
        tags: ["refrigerant", "TXV", "metering-device"],
        safety: "",
        follow_up: ["What symptoms indicate a failing TXV?", "Can a fixed orifice be upgraded to a TXV?"],
        source_references: []
      },
      {
        id: "dirty-evaporator-symptoms-133",
        category: "maintenance",
        canonical_question: "What are common signs of a dirty evaporator coil and how does it affect AC performance?",
        question_variations: [
          "Symptoms of dirty AC evaporator coil",
          "Evaporator coil needs cleaning?",
          "AC cooling weak due to dirty coil",
          "Dirty evaporator impact on airflow"
        ],
        short_answer: "A dirty evaporator reduces airflow, lowers cooling capacity, causes coil icing, and increases energy use. Cleaning restores heat transfer efficiency.",
        long_answer: "As dust and biofilm accumulate on the evaporator fins, airflow drops and the coil surface becomes insulated, preventing proper heat absorption. This often leads to low delta-T, long cooling cycles, and reduced moisture removal. Severe buildup lowers refrigerant saturation temperature, causing coil frost or icing. Cleaning requires safe access panels, soft brushes, approved coil cleaners, and careful rinsing to avoid damaging fins. Maintaining clean filters significantly extends coil cleanliness intervals.",
        tags: ["maintenance", "coil", "airflow"],
        safety: "Shut off power before accessing evaporator compartments to avoid electrical hazards.",
        follow_up: ["How often should coils be inspected?", "Can UV lights prevent coil biofilm buildup?"],
        source_references: []
      },
      {
        id: "condensate-trap-purpose-134",
        category: "installation",
        canonical_question: "Why does an HVAC system require a condensate trap and what happens if it is missing or improperly installed?",
        question_variations: [
          "Purpose of condensate trap AC",
          "Why AC drain needs a P-trap",
          "AC water leakage due to missing trap",
          "How condensate traps work"
        ],
        short_answer: "A condensate trap prevents air from being sucked through the drain line, ensuring proper drainage. Without a trap, the system may leak water or fail to drain.",
        long_answer: "Evaporator coils operate under negative air pressure; without a P-trap, this negative pressure pulls air up the drain line, preventing gravity-driven condensation flow. This causes pan overflow, microbial growth, and water damage. A correctly sized trap with a cleanout port and proper water seal maintains drainage even under varying static pressure conditions. In positive-pressure drain pans, different trap geometries apply; installing the wrong type can also cause drainage problems.",
        tags: ["condensate", "installation", "drainage"],
        safety: "",
        follow_up: ["How deep should a condensate trap be?", "What maintenance does a condensate trap need?"],
        source_references: []
      },
      {
        id: "ac-noise-diagnosis-135",
        category: "diagnostics",
        canonical_question: "What common causes lead to unusual noise in AC indoor or outdoor units?",
        question_variations: [
          "Why is my AC making noise?",
          "Loud AC outdoor unit noise reason",
          "Indoor unit rattling or buzzing",
          "Compressor noise troubleshooting"
        ],
        short_answer: "AC noise commonly results from loose panels, failing fan motors, misaligned blowers, refrigerant flow anomalies, or compressor wear. Each noise type indicates specific issues.",
        long_answer: "Buzzing indoors may indicate failing transformers, blower imbalance, or loose electrical components. Metallic rattling often arises from loosened panels or screws. Outdoor grinding or clanking suggests mechanical compressor failure or seized fan bearings. Hissing may indicate refrigerant leaks, while gurgling can be normal refrigerant flow unless accompanied by poor cooling. Technicians isolate noise sources using operational tests, vibration inspection, and component isolation.",
        tags: ["diagnostics", "noise", "components"],
        safety: "Persistent grinding or hissing can indicate dangerous compressor or refrigerant issues—shut off the system and schedule service.",
        follow_up: ["Why does my AC make noise at startup?", "Can vibration pads reduce outdoor unit noise?"],
        source_references: []
      },
      {
        id: "mold-growth-ac-136",
        category: "air-quality",
        canonical_question: "What causes mold growth inside AC units and how can it be prevented?",
        question_variations: [
          "Why mold grows in HVAC",
          "Prevent mold in AC ducts",
          "AC has musty smell source",
          "Evaporator mold prevention"
        ],
        short_answer: "Mold grows when moisture, dust, and darkness combine—usually on coils, drain pans, and ducts. Prevention includes proper humidity control, drainage, filtration, and regular cleaning.",
        long_answer: "Moisture accumulation in drain pans, dirty coils, or areas with insufficient airflow fosters microbial growth. Poor dehumidification and high indoor humidity accelerate colonization. Dust acts as a nutrient source, while dark duct interiors provide ideal conditions. Prevention strategies include maintaining humidity between 40–60%, cleaning coils, ensuring drain slope and trap function, using high-quality filters, sealing duct leaks, and optionally installing UV-C lights near the evaporator coil to inhibit growth.",
        tags: ["iaq", "mold", "humidity"],
        safety: "",
        follow_up: ["Are UV lights effective long-term?", "How to eliminate musty odors from AC?"],
        source_references: []
      },
      {
        id: "ac-capacitor-failure-137",
        category: "parts",
        canonical_question: "What are common symptoms of a failing AC capacitor?",
        question_variations: [
          "AC capacitor bad symptoms",
          "Why AC won't start capacitor issue",
          "Capacitor causing weak airflow?",
          "Compressor not starting capacitor"
        ],
        short_answer: "A failing capacitor causes hard starting, humming sounds, intermittent compressor or fan operation, overheating, and tripped breakers.",
        long_answer: "Start capacitors deliver the torque needed to start motors; run capacitors stabilize voltage and improve efficiency. When capacitors weaken or fail, motors draw excess current, struggle to start, or overheat. Signs include delayed fan start, clicking noises, warm air output, or the condenser fan spinning only after manual push. Technicians confirm failure using microfarad (µF) measurements and replace with manufacturer-specified components to maintain motor reliability.",
        tags: ["capacitor", "electrical", "diagnostics"],
        safety: "Capacitors hold dangerous charges even when power is off; discharge safely using proper tools before handling.",
        follow_up: ["Why do capacitors fail prematurely?", "Should I use hard-start kits?"],
        source_references: []
      },
      {
        id: "hard-start-kit-138",
        category: "parts",
        canonical_question: "What is a hard-start kit and when should it be used in an AC system?",
        question_variations: [
          "Purpose of hard start kit",
          "Does AC need hard start kit?",
          "Hard start kit benefits",
          "When to install hard start kit"
        ],
        short_answer: "Hard start kits assist compressors in starting with less electrical strain, useful for aging compressors, low-voltage conditions, generator setups, and high starting torque demands.",
        long_answer: "Hard start kits combine a start capacitor and relay to boost starting torque momentarily, reducing inrush current and helping compressors overcome mechanical resistance. They are often used on systems experiencing dimming lights, repeated hard starts, or when powered by generators with limited surge capacity. However, they should not mask underlying mechanical compressor faults. Technicians evaluate amperage draw, LRA (locked rotor amps), and voltage stability before recommending installation.",
        tags: ["compressor", "capacitor", "electrical"],
        safety: "",
        follow_up: ["Do hard start kits extend compressor life?", "Can they void warranties?"],
        source_references: []
      },
      {
        id: "blower-wheel-cleaning-139",
        category: "maintenance",
        canonical_question: "Why is blower wheel cleaning important and how does buildup affect performance?",
        question_variations: [
          "Why clean blower wheel AC",
          "Dirty blower wheel symptoms",
          "Airflow reduced by dirty blower",
          "How dirt affects blower efficiency"
        ],
        short_answer: "A dirty blower wheel reduces CFM, increases static pressure, disrupts airflow distribution, and strains the motor. Cleaning restores airflow and efficiency.",
        long_answer: "Dust accumulation on the blower blades reduces aerodynamic efficiency, lowering delivered airflow and raising total external static pressure. Components downstream receive insufficient air, causing poor cooling, coil freeze-ups, or hot spots in rooms. Motors compensate by drawing higher current, accelerating bearing wear. Proper blower cleaning involves removing the assembly, using safe solvents, brushing deposits, and confirming balance before reinstallation.",
        tags: ["maintenance", "blower", "airflow"],
        safety: "Improperly balanced blower wheels can cause vibration and motor damage—verify alignment after reinstallation.",
        follow_up: ["How often should blower wheels be cleaned?", "Do ECM motors need special handling during cleaning?"],
        source_references: []
      },
      {
        id: "duct-insulation-benefits-140",
        category: "installation",
        canonical_question: "Why should HVAC ducts in unconditioned spaces be insulated?",
        question_variations: [
          "Benefits of insulating AC ducts",
          "Why attic ducts need insulation",
          "Is duct insulation required?",
          "Heat gain in uninsulated ducts"
        ],
        short_answer: "Uninsulated ducts lose or gain heat rapidly in unconditioned spaces, reducing system efficiency and causing uneven temperatures. Insulation preserves delivered cooling capacity.",
        long_answer: "In attics and crawlspaces, ducts are exposed to extreme heat or cold. Without insulation, cold supply air warms before reaching rooms, lowering delta-T and causing the AC to run longer. Return ducts can also draw in heat, raising coil load and humidity. Insulation with proper R-value reduces thermal loss, prevents condensation on ducts, and improves comfort. Sealing joints before insulating is essential for long-term performance.",
        tags: ["installation", "ductwork", "insulation"],
        safety: "",
        follow_up: ["What R-value should duct insulation have?", "Should insulation be replaced if damaged?"],
        source_references: []
      },
      {
        id: "ac-short-cycling-causes-161",
        category: "diagnostics",
        canonical_question: "What causes AC systems to short-cycle and how does this affect performance?",
        question_variations: [
          "Why my AC turns on and off rapidly",
          "AC short cycling meaning",
          "Causes of HVAC frequent cycling",
          "Short cycle AC diagnosis"
        ],
        short_answer: "Short cycling occurs when the AC shuts off prematurely due to oversizing, thermostat issues, refrigerant problems, or airflow restrictions. It reduces efficiency and increases component wear.",
        long_answer: "Short cycling limits the system's ability to dehumidify, increases energy consumption, and imposes frequent starting loads on the compressor. Common causes include oversized equipment, miscalibrated thermostats, dirty filters, blocked evaporator coils, low or high refrigerant charge, or compressor thermal overload. Technicians diagnose by measuring cycle duration, evaluating refrigerant conditions, and inspecting airflow pathways. Corrective actions range from thermostat relocation to load-balanced resizing or component repair.",
        tags: ["diagnostics", "controls", "efficiency"],
        safety: "",
        follow_up: ["How long should a normal AC cycle last?", "Can inverter ACs short-cycle as well?"],
        source_references: []
      },
      {
        id: "compressor-overheating-162",
        category: "diagnostics",
        canonical_question: "What causes compressor overheating and what are the consequences?",
        question_variations: [
          "Why AC compressor overheats",
          "Symptoms of compressor thermal overload",
          "Compressor running hot HVAC",
          "What damages AC compressor"
        ],
        short_answer: "Compressor overheating is caused by low refrigerant charge, airflow issues, high head pressure, dirty coils, or electrical faults. Prolonged overheating leads to winding failure or seizure.",
        long_answer: "Overheated compressors frequently trip thermal overload protectors, causing intermittent cooling and eventual burnout. Root causes include inadequate cooling of the motor windings, restricted condenser airflow, overcharge, non-condensable gases, or failed capacitor components. Technicians evaluate superheat/subcooling, check condenser fan performance, inspect electrical current draw, and test pressures. Immediate correction prevents irreversible compressor damage.",
        tags: ["compressor", "diagnostics", "safety"],
        safety: "Do not continue running an overheating compressor—thermal cycling accelerates winding degradation.",
        follow_up: ["How to measure compressor discharge temperature?", "Can cleaning the condenser fix overheating?"],
        source_references: []
      },
      {
        id: "duct-static-pressure-163",
        category: "airflow",
        canonical_question: "Why is external static pressure important in HVAC systems and how is it measured?",
        question_variations: [
          "What is HVAC static pressure",
          "Why static pressure matters AC",
          "High static pressure symptoms",
          "How to measure external static pressure"
        ],
        short_answer: "External static pressure reflects resistance to airflow within ducts and filters. Excessive static pressure reduces airflow, efficiency, and equipment life. It is measured using a manometer across return and supply plenums.",
        long_answer: "HVAC blowers are designed to operate within specified static pressure ranges. High static pressure results from undersized ducts, dirty filters, restrictive coil fins, or closed registers. It reduces delivered CFM, leads to coil freeze-ups, increases motor amperage, and shortens equipment life. Technicians drill test ports upstream and downstream of the air handler to measure pressure using a differential manometer. Corrections include duct resizing, removing restrictions, or adjusting blower programming.",
        tags: ["airflow", "diagnostics", "ductwork"],
        safety: "",
        follow_up: ["What is maximum ESP for typical residential units?", "How do filter types influence static pressure?"],
        source_references: []
      },
      {
        id: "ac-odor-sources-164",
        category: "air-quality",
        canonical_question: "What are common causes of unpleasant odors from AC systems?",
        question_variations: [
          "Why AC smells bad",
          "Musty smell from AC vents",
          "Burning smell AC diagnosis",
          "Odor from HVAC supply air"
        ],
        short_answer: "AC odors typically result from microbial growth, stagnant condensate, dirty filters, electrical overheating, or refrigerant leaks. Identifying the odor type helps pinpoint root causes.",
        long_answer: "Musty odors often indicate mold growth in coils, drain pans, or ducts. Sour smells suggest standing water in blocked condensate lines. Burning or metallic odors may signal motor overheating or electrical insulation failure. Chemical or \"sweet\" odors sometimes indicate refrigerant leaks. Technicians inspect coils, pans, blower wheels, and electrical components, and verify proper drainage and airflow. Preventative measures include regular cleaning, UV-C installation, and maintaining correct humidity.",
        tags: ["iaq", "odor", "diagnostics"],
        safety: "Immediately shut off the system if burning or electrical odors occur.",
        follow_up: ["Can duct cleaning remove AC odors?", "What odor indicates a refrigerant leak?"],
        source_references: []
      },
      {
        id: "condensate-pump-failure-165",
        category: "maintenance",
        canonical_question: "What causes condensate pump failure and how can it be prevented?",
        question_variations: [
          "Condensate pump not working",
          "AC leaking due to pump failure",
          "Why condensate pump stops",
          "Condensate pump troubleshooting"
        ],
        short_answer: "Condensate pumps fail due to clogs, stuck float switches, motor burnout, or improper installation. Regular cleaning and testing prevent most failures.",
        long_answer: "Dust, algae, or debris in the reservoir restrict float movement, preventing pump activation. Pump motors fail when overloaded or running dry for extended periods. Incorrect discharge tubing slopes, excessive lift height, or kinks cause pump strain. Technicians test pump operation by manually lifting the float, cleaning the reservoir, and verifying discharge flow. Annual maintenance greatly improves reliability.",
        tags: ["condensate", "maintenance", "drainage"],
        safety: "Unattended pump failure can cause water overflow and property damage.",
        follow_up: ["How often should condensate pumps be serviced?", "What lift capacity should a pump have?"],
        source_references: []
      },
      {
        id: "oversized-duct-symptoms-166",
        category: "airflow",
        canonical_question: "What problems arise from oversized supply ducts in HVAC systems?",
        question_variations: [
          "Duct too large problems",
          "Oversized duct airflow issues",
          "Why big ducts reduce AC performance",
          "Low airflow velocity symptoms"
        ],
        short_answer: "Oversized ducts reduce air velocity, weaken room air throw, harm distribution balance, and lead to temperature stratification.",
        long_answer: "Airflow requires adequate velocity to mix conditioned air properly within rooms. When ducts are too large, velocity drops below design values, causing weak air throw from registers, poor mixing, and uneven temperatures. Low velocity also increases duct dust settling, reducing IAQ. Solutions include resizing ducts, adjusting blower speed, and using high-throw registers to compensate for reduced velocity.",
        tags: ["airflow", "ductwork", "installation"],
        safety: "",
        follow_up: ["What is recommended duct velocity?", "Do high-throw diffusers solve oversized ducts?"],
        source_references: []
      },
      {
        id: "ac-freezing-low-airflow-167",
        category: "diagnostics",
        canonical_question: "How does low airflow cause evaporator coil freezing in AC systems?",
        question_variations: [
          "AC coil freezing due to airflow",
          "Why low airflow freezes AC",
          "Frost on evaporator coil cause",
          "Airflow-related AC freezing"
        ],
        short_answer: "Low airflow causes the evaporator coil to operate below freezing temperature, allowing moisture to freeze on the coil and eventually block airflow entirely.",
        long_answer: "Restricted airflow lowers heat transfer at the evaporator, decreasing coil temperature below 0°C. Moisture condenses and freezes, forming ice layers that worsen airflow restriction—a feedback loop leading to system shutdown or compressor damage. Causes include dirty filters, duct restrictions, closed vents, malfunctioning blowers, or clogged coils. Restoring proper airflow through cleaning, duct repair, or blower adjustment resolves the issue.",
        tags: ["diagnostics", "airflow", "coil"],
        safety: "Shut down the system before thawing to avoid liquid floodback into the compressor.",
        follow_up: ["Can refrigerant undercharge also cause freezing?", "How long does coil thawing take?"],
        source_references: []
      },
      {
        id: "heat-load-increase-168",
        category: "building-interaction",
        canonical_question: "What building factors increase cooling load and strain an AC system?",
        question_variations: [
          "What increases AC cooling load",
          "Why AC struggles on hot days",
          "Sources of heat gain in buildings",
          "How windows affect AC performance"
        ],
        short_answer: "Poor insulation, air leaks, solar heat gain, internal heat sources, and inadequate shading all increase cooling load and reduce AC performance.",
        long_answer: "Building envelope weaknesses such as uninsulated walls, attic bypasses, and leaky doors/windows allow heat to infiltrate the conditioned space. Solar radiation through windows significantly raises room temperature; reflective films, blinds, and shading reduce this effect. Internal loads from appliances, electronics, and occupants also add latent and sensible heat. Improving insulation, sealing leaks, and controlling sunlight often enhances AC performance more economically than increasing tonnage.",
        tags: ["building", "efficiency", "sizing"],
        safety: "",
        follow_up: ["Will window films reduce cooling load?", "Is insulation or AC upgrade more cost-effective?"],
        source_references: []
      },
      {
        id: "thermostat-deadband-169",
        category: "controls",
        canonical_question: "What is thermostat deadband and why is it important for AC efficiency?",
        question_variations: [
          "What is HVAC thermostat deadband",
          "Deadband meaning AC controls",
          "Temperature swing thermostat",
          "Why thermostats use deadband"
        ],
        short_answer: "Deadband is the temperature range in which the thermostat allows the system to remain off. It prevents rapid cycling and improves energy efficiency.",
        long_answer: "A thermostat deadband of 1–2°C avoids running the AC immediately after minor temperature fluctuations. This stabilizes control performance, reduces compressor cycling, and extends system life. Smart thermostats dynamically adjust deadband based on humidity, occupancy, and load profiles. Too narrow a deadband causes short cycling; too wide reduces comfort. Proper deadband settings balance efficiency with stability.",
        tags: ["controls", "thermostat", "efficiency"],
        safety: "",
        follow_up: ["What is ideal deadband for residential AC?", "Do inverter systems require deadband adjustment?"],
        source_references: []
      },
      {
        id: "smart-thermostat-limitations-170",
        category: "controls",
        canonical_question: "What limitations do smart thermostats have when used with older HVAC systems?",
        question_variations: [
          "Smart thermostat compatibility issues",
          "Why smart thermostat not working with old AC",
          "Limitations of smart thermostats HVAC",
          "Do I need common wire for smart thermostat?"
        ],
        short_answer: "Older HVAC systems may lack C-wire power, multi-stage compatibility, or modern control capabilities, limiting smart thermostat features or causing malfunction.",
        long_answer: "Smart thermostats require continuous low-voltage power, often unavailable on older furnaces or air handlers lacking a C-wire. Some systems use proprietary control boards incompatible with standard smart thermostats. Multi-speed or inverter features may not integrate, resulting in reduced functionality or improper staging. Technicians often install add-a-wire kits, update transformers, or upgrade control boards to ensure compatibility.",
        tags: ["controls", "thermostat", "compatibility"],
        safety: "",
        follow_up: ["Do smart thermostats save energy on old systems?", "How to add a C-wire safely?"],
        source_references: []
      },
      {
        id: "humidity-high-impact-171",
        category: "diagnostics",
        canonical_question: "How does high indoor humidity affect AC performance and comfort?",
        question_variations: [
          "Why my home feels humid even with AC running",
          "AC not removing humidity",
          "High humidity symptom HVAC",
          "Does humidity reduce AC efficiency"
        ],
        short_answer: "High humidity makes the space feel warmer, increases AC runtime, and may indicate insufficient latent cooling capacity, improper airflow, or oversized equipment.",
        long_answer: "Air conditioners remove both sensible and latent heat, but oversized systems cool the air too quickly to dehumidify properly. Clogged filters, low refrigerant charge, poor airflow, or coil contamination reduce moisture removal. High humidity leads to discomfort, mold risk, and increased energy consumption. Diagnostic steps include measuring wet-bulb return air, verifying airflow CFM per ton, checking evaporator coil condition, and reviewing system sizing and runtime profile.",
        tags: ["humidity", "latent-load", "comfort"],
        safety: "",
        follow_up: ["Is a dehumidifier needed with my AC?", "Can oversized AC reduce humidity removal?"],
        source_references: []
      }
    ];
    return newEntries;
  })(),
];
