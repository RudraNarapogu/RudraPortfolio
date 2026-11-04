import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
import os

# Use current directory for output
output_path = os.path.join(os.getcwd(), "HVE_Complete_Materials_List.xlsx")

wb = openpyxl.Workbook()
ws = wb.active
ws.title = "Complete Materials List"

title_font = Font(name="Arial", size=14, bold=True)
section_font = Font(name="Arial", size=11, bold=True, color="FFFFFF")
section_fill = PatternFill(start_color="1F4E78", end_color="1F4E78", fill_type="solid")
header_font = Font(name="Arial", size=10, bold=True, color="FFFFFF")
header_fill = PatternFill(start_color="2E75B6", end_color="2E75B6", fill_type="solid")
normal_font = Font(name="Arial", size=9.5)
added_fill = PatternFill(start_color="C6E0B4", end_color="C6E0B4", fill_type="solid")   # green = added
modified_fill = PatternFill(start_color="FFE699", end_color="FFE699", fill_type="solid") # yellow = modified/sized
flag_fill = PatternFill(start_color="F8CBAD", end_color="F8CBAD", fill_type="solid")     # orange = needs decision
thin = Side(style="thin", color="D9D9D9")
border = Border(left=thin, right=thin, top=thin, bottom=thin)
wrap = Alignment(wrap_text=True, vertical="top")

ws["A1"] = "High Voltage Electricals — 1250 kVA / 900 kW / 10×90kW EV Station — Complete Materials & Components List"
ws["A1"].font = title_font
ws["A2"] = "Legend: green = item added (missing from source docs) | yellow = size/spec added or corrected | orange = open decision needed before procurement"
ws["A2"].font = Font(name="Arial", size=9, italic=True)

headers = ["Sl No", "Item", "Specification / Size", "Qty", "Unit", "Status", "Remarks"]
row = 4
for c, h in enumerate(headers, start=1):
    cell = ws.cell(row=row, column=c, value=h)
    cell.font = header_font
    cell.fill = header_fill
    cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)
ws.freeze_panes = "A5"
row += 1

def section(title):
    global row
    ws.cell(row=row, column=1, value=title).font = section_font
    ws.cell(row=row, column=1).fill = section_fill
    ws.merge_cells(start_row=row, start_column=1, end_row=row, end_column=7)
    row += 1

def item(sl, name, spec, qty, unit, status, remarks):
    global row
    fill = None
    if status == "ADDED": fill = added_fill
    elif status == "MODIFIED": fill = modified_fill
    elif status == "FLAG": fill = flag_fill
    vals = [sl, name, spec, qty, unit, status, remarks]
    for c, v in enumerate(vals, start=1):
        cell = ws.cell(row=row, column=c, value=v)
        cell.font = normal_font
        cell.alignment = wrap
        cell.border = border
        if fill and c in (2,3,6):
            cell.fill = fill
    row += 1

# ---------------- A. 11kV Incoming & 4-Pole Structure ----------------
section("A — 11 kV Incoming & 4-Pole Structure")
item(1,"HT poles","9.1 m PSC pole (or steel support) — TGSPDCL-approved",4,"Nos","OK","Confirmed")
item(2,"MS/GI cross arms & channels","1.53 m 'V' cross arm, MS channel/angle per TGSPDCL standard",4,"Sets","MODIFIED","Size added — source said generic 'complete structure'")
item(3,"Bracing set","GI/MS bracing with double cross arm",1,"Lot","OK","Confirmed")
item(4,"Double-break AB switch","11 kV — rating 400 A (likely, per TGSPDCL precedent) or 800 A — CONFIRM with DISCOM before order",1,"Set","FLAG","Do not presume 800 A — validated against TGSPDCL's own historical practice for comparable HT loads")
item(5,"Lightning arresters","11 kV, 10 kA, metal-oxide, station/line type",3,"Nos","MODIFIED","Rating (10 kA) added — source just said '11 kV class'")
item(6,"Post/pin insulators","11 kV polymer pin insulator with GI pin",12,"Nos","OK","Confirmed")
item(7,"Strain/disc insulator sets","11 kV, 3-disc B&S string set with hardware",6,"Sets","OK","Confirmed")
item(8,"ACSR conductor/jumpers","'Rabbit' (55 sqmm) or 'Weasel' (34 sqmm) AAAC/ACSR per TGSPDCL standard span table",60,"m","MODIFIED","Size added — source left conductor size unspecified")
item(9,"Flexible jumpers","Cu/Al flexible, sized to match chosen conductor",1,"Lot","OK","Confirmed")
item(10,"PG clamps/connectors","Suitable for chosen conductor size",15,"Nos","OK","Confirmed")
item(11,"Stay sets","GI stay wire 7/3.15 mm with stay insulator",4,"Sets","OK","Confirmed")
item(12,"Pole clamps, nuts, bolts, washers","HDG",1,"Lot","OK","Confirmed")
item(13,"Anti-climbing devices","Barbed wire/spike guard, approved type",4,"Sets","OK","Confirmed")
item(14,"Danger boards","11 kV standard signage",2,"Nos","OK","Confirmed")
item(15,"Phase/name plates","R/Y/B identification",1,"Set","OK","Confirmed")
item(16,"Structure earthing","GI pipe electrode 40 mm dia x 2.75 m, bonded to 50x6mm GI strip",2,"Sets","MODIFIED","Electrode size added — source just said 'complete'")
item(17,"Structural protective paint","Primer + 2 coats outdoor-grade enamel/galvanizing repair paint",1,"Lot","ADDED","Missing from both source docs — was flagged in earlier project conversation")
item(18,"Pole/structure foundation","RCC M15/M20 grouted foundation per structural drawing",4,"Nos","OK","Confirmed")

# ---------------- B. HT Metering ----------------
section("B — HT Metering")
item(19,"HT metering CTs","Dual-core, 0.5 class metering + 5P10 protection, ratio TBD — indicative 75/5–100/5 A (65.6 A HT FLC)",3,"Nos","MODIFIED","Indicative ratio range added — do not order to this, pending DISCOM scheme")
item(20,"HT metering PTs","11 kV/√3 / 110 V/√3, Class 0.5",3,"Nos","OK","Confirmed")
item(21,"PT fuses","3.15 A HRC",3,"Nos","MODIFIED","Rating (3.15 A) restored — later doc dropped it to 'appropriate rating'")
item(22,"HT metering cubicle","TGSPDCL-approved kiosk/cubicle",1,"Set","OK","Confirmed")
item(23,"HT revenue meter","Trivector, Class 0.2S/0.5S per TGSPDCL scheme",1,"No","OK","Confirmed")
item(24,"HT check meter","As required by DISCOM (optional)",1,"No","ADDED","Missing from both source docs — standard DISCOM requirement, confirm need")
item(25,"Metering wiring/TBs/accessories","Complete",1,"Lot","OK","Confirmed")
item(26,"Sealing arrangement","TGSPDCL sealing per revenue metering norms",1,"Lot","ADDED","Present in original tech spec, dropped from the two later materials lists")

# ---------------- C. 11kV VCB Panel ----------------
section("C — 11 kV VCB Panel")
item(27,"VCB panel enclosure","11 kV, 800 A, 20 kA/3 sec, metal-clad DRAW-OUT — INDOOR type",1,"Set","FLAG","ARCHITECTURE MISMATCH: panel is specified 'indoor' but overall design is an 'open outdoor substation' — needs an enclosed room/kiosk (see item 222) OR switch to an outdoor/weatherproof-rated VCB. Not resolved in either source doc.")
item(28,"VCB (vacuum interrupter)","Draw-out type",1,"No","OK","Confirmed")
item(29,"Protection CT","Dual-core, 5P10, ratio TBD",3,"Nos","OK","Confirmed, ratio pending per Section B")
item(30,"Numerical relay","3 O/C + 1 E/F, ANSI 50/51, 50N/51N, TCS",1,"No","OK","Confirmed")
item(31,"Master trip relay","ANSI 86",1,"No","OK","Confirmed")
item(32,"Anti-pumping relay","Suitable for VCB control circuit",1,"No","OK","Confirmed")
item(33,"Transformer auxiliary relay/interface","Buchholz/OTI/WTI/PRV interface",1,"Set","OK","Confirmed")
item(34,"Spring-charging motor","230 VAC",1,"No","OK","Confirmed")
item(35,"Closing coil","24 VDC",1,"No","OK","Confirmed")
item(36,"Shunt-trip coil","24 VDC — fed from dedicated DC power pack, NOT solely AC aux supply",1,"No","MODIFIED","Independent DC trip supply requirement restated — this was a key earlier recommendation, confirm it's retained in final panel spec")
item(37,"Auxiliary contacts","Minimum 6NO + 6NC",1,"Set","OK","Confirmed")
item(38,"DC power pack","230 VAC/24 VDC, 7 Ah minimum, battery + charger",1,"Set","OK","Confirmed — satisfies dedicated DC trip supply requirement")
item(39,"TNC switch","Trip-Neutral-Close",1,"No","OK","Confirmed")
item(40,"Local/Remote selector","—",1,"No","OK","Confirmed")
item(41,"Ammeter + selector switch","Digital, R-Y-B selector",1,"Set","OK","Confirmed")
item(42,"Voltmeter + selector switch","Digital",1,"Set","OK","Confirmed")
item(43,"Indication lamps","ON(red)/OFF(green)/Spring-charged(blue)/Auto-trip(amber)/TCS-healthy(white)/R-Y-B healthy",8,"Nos","OK","Confirmed, consolidated count")
item(44,"Hooter + accept/reset PB","24 VDC hooter + 2 PBs",3,"Nos","OK","Confirmed")
item(45,"Emergency-stop PB","Mushroom head",1,"No","OK","Confirmed")
item(46,"Space heater + thermostat","100 W heater, 0–60°C thermostat",2,"Nos","OK","Confirmed")
item(47,"Cubicle LED lamp","Internal illumination",1,"No","OK","Confirmed")
item(48,"Door limit switch","—",1,"No","OK","Confirmed")
item(49,"Service socket","230 V, 6/16 A",1,"No","OK","Confirmed")
item(50,"DP MCB","6 A, 10 kA",2,"Nos","OK","Confirmed")
item(51,"SP MCB","6 A, 10 kA",10,"Nos","OK","Confirmed")
item(52,"CT shorting TB","6 sqmm",1,"Set","OK","Confirmed")
item(53,"PT terminal blocks","6 sqmm",1,"Set","OK","Confirmed")
item(54,"Control TB, neutral links","Suitable rating, 2 neutral links",1,"Lot","OK","Confirmed")
item(55,"Internal control wiring","FRLS Cu, 1.5/2.5 sqmm",1,"Lot","OK","Confirmed")
item(56,"Ferrules, markers, glands, lugs","Complete set",1,"Lot","OK","Confirmed")

# ---------------- D. Transformer ----------------
section("D — Transformer + Accessories + OLTC/RTCC/AVR")
item(57,"Power transformer","1250 kVA, 11kV/433V, 3ph 50Hz, 100% Cu double wound, ONAN, Dyn11, CRGO, 5% impedance, outdoor, IS 1180",1,"No","OK","Confirmed. HT FLC ~65.6A, LT FLC ~1667A")
item(58,"OLTC","17-position, +10% to −10%, 1.25% steps",1,"Set","FLAG","OLTC vs OCTC still an owner cost decision (₹3.05L delta) — not yet signed off")
item(59,"RTCC panel","Remote tap-changer control",1,"No","OK","Confirmed")
item(60,"AVR relay","Automatic voltage regulator",1,"No","OK","Confirmed")
item(61,"Buchholz relay","Alarm + trip contacts",1,"No","OK","Confirmed")
item(62,"WTI","Alarm + trip contacts",1,"No","OK","Confirmed")
item(63,"OTI","Alarm + trip contacts",1,"No","OK","Confirmed")
item(64,"MOG / oil-level indicator","With contacts",1,"No","OK","Confirmed")
item(65,"Pressure relief/explosion vent","Transformer fitting",1,"Set","OK","Confirmed")
item(66,"Silica-gel breather","—",1,"No","OK","Confirmed")
item(67,"Conservator","Complete",1,"No","OK","Confirmed")
item(68,"Radiators","Manufacturer-designed",1,"Set","OK","Confirmed")
item(69,"Marshalling box","Fully wired",1,"No","OK","Confirmed")
item(70,"Transformer oil","Mineral oil, IS 335, first filling",1,"Lot","OK","Confirmed")
item(71,"Body earth terminals","—",2,"Nos","OK","Confirmed")
item(72,"Neutral earth terminal","2 independent connections preferred, subject to design",2,"Nos","MODIFIED","Qty corrected from 1 to 2 — matches Section L earthing requirement (transformer neutral needs 2 independent connections)")
item(73,"OLTC motor-drive mechanism","—",1,"No","OK","Confirmed")
item(74,"Raise/Lower PB","—",1,"Set","OK","Confirmed")
item(75,"Auto/Manual + Local/Remote selectors","—",2,"Nos","OK","Confirmed")
item(76,"Tap-position indicator + transmitter","—",2,"Nos","OK","Confirmed")
item(77,"OLTC operation counter","—",1,"No","OK","Confirmed")
item(78,"RTCC control MCBs + annunciation","—",1,"Lot","OK","Confirmed")
item(79,"Transformer–RTCC control cable","Multicore, route length + 10%",1,"Lot","OK","Confirmed")
item(80,"Transformer RCC foundation","Per transformer GA + foundation loading drawing — do not freeze dims early",1,"Lot","ADDED","Present in original tech spec, missing from later materials lists")
item(81,"Oil soak pit / containment","As required",1,"Set","ADDED","Present in original tech spec, missing from later materials lists")
item(82,"Transformer yard fencing","—",1,"Set","OK","Confirmed")

# ---------------- E. LT Busduct + Main PCC ----------------
section("E — LT Busduct + Main PCC")
item(83,"Transformer flexible connection/adaptor","Copper",1,"Set","OK","Confirmed")
item(84,"LT busduct","2000 A, 4P, Cu/Al conductor — reconciled from 1250kVA FLC (~1667A) + demand (~1450A peak)",0,"m","OK","Length TBD by layout")
item(85,"Busduct adaptors (transformer + PCC ends)","2000 A",2,"Sets","OK","Confirmed")
item(86,"Main PCC enclosure","433V, 2000A, 50kA class — OUTDOOR site, confirm IP rating",1,"Set","FLAG","Same indoor/outdoor mismatch as item 27 — confirm IP54/55 rating or a room/kiosk enclosure")
item(87,"Main incomer ACB","2000 A, 4P, draw-out, LSIG",1,"No","OK","Confirmed")
item(88,"ACB motorized mechanism + coils","Closing coil, shunt trip",1,"Set","OK","Confirmed")
item(89,"Under-voltage release","If protection philosophy requires",1,"No","OK","Confirmed, conditional")
item(90,"ACB auxiliary contacts","—",1,"Set","OK","Confirmed")
item(91,"PCC copper busbar","2000 A minimum, R/Y/B/N",1,"Set","OK","Confirmed")
item(92,"PCC earth bus + neutral bus","Copper/GI as designed",2,"Sets","OK","Confirmed")
item(93,"Multifunction meter + CTs","V/A/kW/kWh/PF",1,"Set","OK","Confirmed, 3 CTs")
item(94,"SPD Type 1+2 + backup MCB/MCCB","Coordinated with charger SPDs",1,"Set","OK","Confirmed")
item(95,"R/Y/B phase lamps + ACB status lamps","—",6,"Nos","OK","Confirmed")
item(96,"Control MCBs","—",5,"Nos","OK","Confirmed, mid-range of 4-6 given")
item(97,"TNC switch, Local/Remote selector, E-stop","—",3,"Nos","OK","Confirmed")
item(98,"Space heaters + thermostats","—",4,"Nos","OK","Confirmed")
item(99,"Panel LED lamps + door switches","—",5,"Nos","OK","Confirmed")
item(100,"Maintenance socket","230V 6/16A",1,"No","OK","Confirmed")
item(101,"Cooling/exhaust fans + thermostat","If thermal design requires",3,"Nos","OK","Confirmed, conditional")
item(102,"Terminal blocks, wiring ducts, ferrules, glands, lugs","Complete",1,"Lot","OK","Confirmed")

# ---------------- F. Charger Feeders ----------------
section("F — Charger Feeders (LT, 10 x 90 kW)")
item(103,"Charger feeder MCCB","200 A, 4P, electronic/adjustable trip — 133.3A FLC x1.25=166.7A basis, PENDING OEM confirmation",10,"Nos","OK","Confirmed size, still pending final OEM current data")
item(104,"Spare feeder MCCB","200 A, 4P",1,"No","OK","Confirmed")
item(105,"MCCB auxiliary contacts","—",11,"Sets","OK","10 chargers + 1 spare")
item(106,"MCCB shunt trip","Where E-stop architecture requires",11,"Nos","OK","Confirmed, conditional")
item(107,"Feeder status lamps","ON/OFF/TRIP per feeder",30,"Nos","OK","10 feeders x 3 lamps")
item(108,"Feeder MFM meter (optional)","Only if CMS does NOT already provide per-charger metering",10,"Nos","FLAG","Both source docs correctly flag this as optional — do not duplicate if CMS/OCPP already meters each charger")
item(109,"Feeder metering CT (optional)","Only if item 108 is included",30,"Nos","FLAG","Tied to item 108 — remove if CMS metering is used instead")
item(110,"Feeder control MCB","—",10,"Nos","OK","Confirmed")
item(111,"Feeder SPD","Per charger OEM/system design",10,"Nos","OK","Confirmed, size TBD")
item(112,"Feeder termination hardware, glands, lugs, ferrules","Complete per feeder",11,"Sets","OK","10 + 1 spare")

# ---------------- G. EV Chargers & Infrastructure (coordination only) ----------------
section("G — EV Chargers & Charging Infrastructure (outside HVE electrical scope — for coordination)")
item(113,"DC fast charger","90 kW, CCS2",10,"Nos","OK","Confirmed, per frozen load design")
item(114,"CCS2 charging gun/cable","OEM configuration, single/dual gun",15,"Nos","OK","Mid-range of 10-20 given")
item(115,"Charger foundation","RCC",10,"Nos","OK","Confirmed")
item(116,"Charger protection bollards","Heavy-duty",20,"Nos","OK","Confirmed")
item(117,"Charger emergency stop","Local + central",11,"Nos","OK","10 local + 1 central")
item(118,"Charger signage","Bay identification",10,"Sets","OK","Confirmed")
item(119,"Wheel stops","Charging bays",20,"Nos","OK","Confirmed")
item(120,"CMS/OCPP system","Central management",1,"System","OK","Confirmed")
item(121,"Network router/gateway","Industrial",1,"Set","OK","Confirmed")
item(122,"Ethernet/fibre network","Site dependent",1,"Lot","OK","Confirmed")
item(123,"CCTV cameras + NVR/storage","Charging area coverage",10,"Nos","OK","Mid-range of 8-12 given")
item(124,"Network UPS","For IT/control systems",1,"No","OK","Confirmed")

# ---------------- H. Auxiliary DB ----------------
section("H — Auxiliary Distribution Board")
item(125,"Incomer MCCB","100/125 A, 4P — placeholder pending actual aux load list",1,"No","FLAG","Sizing not yet based on real aux load schedule — confirm before order")
item(126,"Type-2 SPD","—",1,"Set","OK","Confirmed")
item(127,"RCCB/RCBO","As circuits require",1,"Lot","OK","Confirmed")
item(128,"32A TP/TPN MCB","—",2,"Nos","OK","Confirmed")
item(129,"20A / 16A / 10A / 6A SP MCB","—",18,"Nos","OK","4+6+4+4 consolidated")
item(130,"Neutral bar, earth bar, R/Y/B lamps, wiring","—",1,"Lot","OK","Confirmed")

# ---------------- I. Lighting DB ----------------
section("I — Lighting Distribution Board")
item(131,"Incomer MCCB/isolator","63 A, 4P",1,"No","OK","Confirmed")
item(132,"RCCB + Type-2 SPD","—",2,"Nos","OK","Confirmed")
item(133,"10A/16A/20A/6A SP MCB","—",16,"Nos","OK","8+4+2+2 consolidated")
item(134,"Neutral bar, earth bar, wiring","—",1,"Lot","OK","Confirmed")
item(135,"LED street/flood lights","—",13,"Nos","OK","Mid-range of 10-16")
item(136,"Lighting poles","—",8,"Nos","OK","Mid-range of 6-10")
item(137,"Outdoor junction boxes","—",12,"Nos","OK","Mid-range of 10-15")
item(138,"Photocell/astronomical timer","—",1,"Set","OK","Confirmed")
item(139,"Lighting contactors + selectors","—",4,"Nos","OK","Confirmed")

# ---------------- J. HT/LT Cables & Terminations ----------------
section("J — HT/LT Cables & Terminations")
item(140,"HT XLPE armoured cable","11 kV, 3-core, indicative 35 sqmm Cu minimum — CONFIRM against fault-level study & route length",0,"m","MODIFIED","Size ADDED — both source docs left this completely unspecified ('route length + 10%' with no cross-section)")
item(141,"HT termination kits","VCB end + transformer end",2,"Sets","OK","Confirmed")
item(142,"HT glands/lugs","—",2,"Sets","OK","Confirmed")
item(143,"LT charger feeder cable","70 sqmm Cu XLPE armoured, 3.5-core — per earlier grouping-derating calc for 10 parallel feeders",0,"m","MODIFIED","Size CARRIED FORWARD from load-design chat — both later docs left this unspecified pending 'charger-to-PCC distance'")
item(144,"Charger cable glands + lugs","Both ends, 10 feeders + spare",22,"Sets","OK","11 feeders x 2 ends")
item(145,"Auxiliary/lighting power cables","Per aux/lighting load list",1,"Lot","OK","Confirmed")
item(146,"Control cables","Multicore, 2.5 sqmm Cu",1,"Lot","OK","Confirmed")
item(147,"RTCC/transformer control cable","—",1,"Lot","OK","Confirmed, see item 79")
item(148,"Cable markers/ferrules","—",1,"Lot","OK","Confirmed")

# ---------------- K. Cable Management ----------------
section("K — Cable Management")
item(149,"GI perforated cable trays","300/450/600 mm width per cable bundle — route length + 10%",0,"m","MODIFIED","Standard widths added — source just said 'route length + 10%'")
item(150,"HT cable supports/cleats","—",1,"Lot","OK","Confirmed")
item(151,"Tray bends/tees/reducers","—",1,"Lot","OK","Confirmed")
item(152,"Tray support channels","1.2–1.5 m spacing",1,"Lot","OK","Confirmed")
item(153,"HDG nuts/bolts, route markers, trench covers","—",1,"Lot","OK","Confirmed")
item(154,"HDPE/GI road-crossing pipes","Site dependent",1,"Lot","OK","Confirmed")

# ---------------- L. Earthing & Lightning Protection ----------------
section("L — Earthing & Lightning Protection")
item(155,"Earth pits","GI pipe electrode 40 mm dia x 2.75–3 m (or chemical earthing) — PENDING soil resistivity",14,"Nos","MODIFIED","Electrode size added; qty stays provisional (12-16) pending soil test")
item(156,"Transformer body earth","—",2,"Connections","OK","Confirmed")
item(157,"Transformer neutral earth","2 independent connections",2,"Connections","OK","Confirmed")
item(158,"VCB panel earth","—",2,"Connections","OK","Confirmed")
item(159,"PCC earth","—",2,"Connections","OK","Confirmed")
item(160,"Charger earth connections","10 x 2",20,"Connections","OK","Confirmed")
item(161,"LA earth","Dedicated low-impedance path, 50x6mm GI strip",3,"Sets","MODIFIED","Strip size added")
item(162,"GI earth strip","50 x 6 mm — site perimeter/grid length + allowance",0,"m","OK","Confirmed size")
item(163,"GI/Cu earth conductor","—",1,"Lot","OK","Confirmed")
item(164,"Earth inspection chambers","—",14,"Nos","OK","Matches item 155")
item(165,"Earth test links","—",1,"Lot","OK","Confirmed")
item(166,"Earth busbars","HT/LT/charger areas",1,"Lot","OK","Confirmed")
item(167,"Earth resistance acceptance criterion","Target ≤1Ω (or per applicable CEA norm) — fix before testing",1,"Value","ADDED","Missing from both source docs — flagged earlier as needed so the testing engineer has a pass/fail threshold")
item(168,"Lightning-protection system","Complete system, if risk assessment requires",1,"System","OK","Confirmed, conditional")

# ---------------- M. Civil Works ----------------
section("M — Civil Works")
item(169,"4-pole foundations","—",4,"Nos","OK","Confirmed")
item(170,"Transformer RCC foundation","—",1,"No","OK","Confirmed, see item 80")
item(171,"VCB panel room/plinth","—",1,"Lot","FLAG","Depends on resolution of item 27 (indoor vs outdoor)")
item(172,"PCC room/plinth","—",1,"Lot","FLAG","Depends on resolution of item 86")
item(173,"Charger foundations","—",10,"Nos","OK","Confirmed")
item(174,"Cable trench","Site length",0,"m","OK","Confirmed")
item(175,"Equipment access/unloading area","—",1,"Lot","OK","Confirmed")

# ---------------- N. Fire & Safety ----------------
section("N — Fire & Safety")
item(176,"CO2/DCP extinguishers","As fire design requires",4,"Nos","OK","Confirmed")
item(177,"Fire/safety signage","—",1,"Lot","OK","Confirmed")
item(178,"Electrical rubber mats","HT + LT panels",2,"Sets","OK","Confirmed")
item(179,"First-aid box","—",1,"No","OK","Confirmed")
item(180,"HT operating rod","—",1,"No","OK","Confirmed")
item(181,"Electrical PPE kit","—",2,"Sets","OK","Confirmed")
item(182,"Fire wall/barrier for transformer","Per CEA requirement, subject to site clearance check",1,"Lot","ADDED","Flagged earlier in the project, missing from both later materials lists — check against actual site layout")

# ---------------- O. Documentation & Approvals ----------------
section("O — Documentation & Approvals")
item(183,"CEIG approval documentation","SLD approval, inspection, completion certificate",1,"Lot","ADDED","Missing from both source docs — required to energize an 11kV installation in Telangana, separate from TGSPDCL sanction")
item(184,"TGSPDCL sanctioned-load/feasibility documentation","Resolves 650kVA vs actual demand mismatch",1,"Lot","ADDED","Missing from both source docs — this is the single biggest unresolved open issue in the whole project")
item(185,"Soil resistivity test report","Basis for earth-pit count and earthing design",1,"Lot","ADDED","Needed to finalize item 155/164")
item(186,"Harmonic/power-quality study report","Basis for APFC/AHF/SVG sizing",1,"Lot","ADDED","Needed before Package 7 (APFC) can be sized — correctly deferred in source docs")
item(187,"Testing & commissioning certificates","Transformer, VCB, cable, earthing, integrated trip test","1","Lot","OK","Confirmed")

# ---------------- P. Deferred Items ----------------
section("P — Deferred / Pending Decision (do not procure yet)")
item(188,"APFC / AHF / SVG package","Sizing pending harmonic study (item 186)",1,"Lot","FLAG","Correctly deferred by both source docs")
item(189,"OCTC transformer (alternative to OLTC)","Mutually exclusive with item 58 — owner decision pending",1,"No","FLAG","Do not quote both to client")

last_row = row - 1

widths = {1:6, 2:30, 3:52, 4:8, 5:8, 6:11, 7:46}
for col, w in widths.items():
    ws.column_dimensions[get_column_letter(col)].width = w
ws.row_dimensions[1].height = 22

# ---------------- Changes Summary sheet ----------------
summary = wb.create_sheet("Changes Summary")
summary["A1"] = "Summary of Additions, Modifications & Flags vs. the two source documents"
summary["A1"].font = title_font
summary["A3"] = "ADDED (missing from both source docs, restored from earlier project decisions or standard practice):"
summary["A3"].font = Font(name="Arial", bold=True)
added_list = [
"#17 Structural protective paint","#24 HT check meter","#26 Sealing arrangement",
"#80 Transformer RCC foundation (detail)","#81 Oil soak pit/containment",
"#167 Earth resistance acceptance criterion","#182 Fire wall/barrier for transformer",
"#183 CEIG approval documentation","#184 TGSPDCL sanctioned-load documentation",
"#185 Soil resistivity test report","#186 Harmonic/power-quality study report",
]
r = 4
for a in added_list:
    summary.cell(row=r, column=1, value="• "+a).font = normal_font
    r += 1

r += 1
summary.cell(row=r, column=1, value="MODIFIED (size/spec added where source docs left it generic or unspecified):").font = Font(name="Arial", bold=True)
r += 1
mod_list = [
"#4 AB switch — flagged 400A vs 800A decision (not just 'approved rating')",
"#5 Lightning arresters — 10kA rating added",
"#8 ACSR conductor — Rabbit/Weasel size added (was unspecified)",
"#16 Structure earthing — electrode size added",
"#19 HT metering CT ratio — indicative range added (75-100/5A)",
"#21 PT fuses — 3.15A rating restored",
"#36 Shunt-trip coil — restated dedicated DC supply requirement",
"#72 Transformer neutral earth — qty corrected 1→2 (matches earthing section)",
"#140 HT cable — 35 sqmm Cu indicative size ADDED (was completely unspecified in both docs)",
"#143 LT charger feeder cable — 70 sqmm Cu size CARRIED FORWARD from earlier load-design chat — both later docs dropped this to 'TBD')",
"#149 Cable trays — standard widths added",
"#155/161/162 Earthing — electrode and strip sizes added",
]
for m in mod_list:
    summary.cell(row=r, column=1, value="• "+m).font = normal_font
    r += 1

r += 1
summary.cell(row=r, column=1, value="FLAGGED (real open issues/decisions — not resolved by either source doc):").font = Font(name="Arial", bold=True)
r += 1
flag_list = [
"#27/#86/#171/#172 — VCB and PCC specified as INDOOR metal-clad, but overall architecture is an 'open OUTDOOR substation'. This was never reconciled in either source document. Needs an enclosed room/kiosk OR outdoor-rated switchgear — pick one before ordering panels.",
"#4 AB switch rating (400A vs 800A) — pending TGSPDCL scheme",
"#58/#189 OLTC vs OCTC — owner cost sign-off still pending (₹3.05L delta)",
"#108/#109 Feeder metering — correctly kept optional, don't duplicate if CMS/OCPP already meters",
"#125 Auxiliary DB incomer — sized as placeholder, not yet based on real aux load schedule",
"#188 APFC/AHF/SVG — correctly deferred pending harmonic study",
]
for f in flag_list:
    summary.cell(row=r, column=1, value="• "+f).font = normal_font
    r += 1

summary.column_dimensions["A"].width = 130

wb.save(output_path)
print("saved to:", output_path)
print("total items:", last_row)
