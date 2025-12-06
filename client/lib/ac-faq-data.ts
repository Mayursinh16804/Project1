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
];
