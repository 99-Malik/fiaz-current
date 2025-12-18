import Image from "next/image";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";

export default function ServicesDetails({
  company = "Repair Home UAE",
}) {
  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center py-20">
      <div
        className={cn(
          "flex flex-col gap-6 text-center max-w-4xl px-4 mx-4 sm:mx-0",
          "bg-white rounded-3xl p-8 sm:p-12 shadow-sm border",
          company === "Siemens" ? "border-siemensPrimary/20" :
            company === "Bosch" ? "border-boschPrimary/20" :
              company === "Samsung" ? "border-samsungPrimary/20" :
                company === "Lg" ? "border-lgPrimary/20" :
                  "border-primary/20"
        )}
      >
        <span className={cn(
          "mx-auto px-4 py-1.5 rounded-full text-sm font-semibold w-fit",
          company === "Siemens" ? "bg-siemensPrimary/10 text-siemensPrimary" :
            company === "Bosch" ? "bg-boschPrimary/10 text-boschPrimary" :
              company === "Samsung" ? "bg-samsungPrimary/10 text-samsungPrimary" :
                company === "Lg" ? "bg-lgPrimary/10 text-lgPrimary" :
                  "bg-primary/10 text-primary"
        )}>
          Home Appliances Repairs
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          <span className={cn(
            company === "Siemens" ? "text-siemensPrimary" :
              company === "Bosch" ? "text-boschPrimary" :
                company === "Samsung" ? "text-samsungPrimary" :
                  company === "Lg" ? "text-lgPrimary" :
                    "text-primary"
          )}>
            {company}
          </span> Service Center
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          At {company} Service Center, we specialize in repairing a wide range
          of {company} home appliances. Our certified technicians are experts in
          diagnosing and fixing issues with your {company} washing machine,
          fridge, dishwasher, dryer, and cooking range.
        </p>
      </div>
      <div className="max-w-7xl px-5 w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <Service
          company={company}
          title={`${company} Washing Machine Repair`}
          desc={`${company} washing machines are known for their reliability, but like any appliance, they can develop issues over time. Our technicians are experts in ${company} washing machine repairs and can quickly diagnose and fix any problem. Common issues include:`}
          points={[
            "Machine not starting",
            "Machine not spinning",
            "Machine not draining",
            "Water leaking from the machine",
            "Excessive noise during operation",
            "Error codes on the display",
            "Unpleasant odors",
            "Incomplete wash cycles",
            "Water not draining properly",
            "Machine vibrating excessively",
            "Door not locking",
            "Water temperature issues",
            "Soap dispenser not working",
            "Electrical issues",
            "Blocked filters",
            "Overfilling",
            "Clothes coming out wet",
            "Clothes not rinsing properly",
            "Drum not filling with water",
            "Machine tripping the circuit breaker",
            "Slow wash cycles",
            "Control panel issues",
          ]}
          imgUrl={"/washing-new.png"}
        />
        <Service
          company={company}
          title={`${company} Refrigerator Repair`}
          desc={`A malfunctioning fridge can be a major inconvenience, but our technicians are here to help. We specialize in ${company} fridge repairs, addressing common issues such as:`}
          points={[
            "Fridge not cooling",
            "Ice maker not working",
            "Water leakage",
            "Unusual noises",
            "Frost buildup in the freezer",
            "Door seal problems",
            "Temperature fluctuations",
            "Fridge light not working",
            "Compressor issues",
            "Control board failure",
            "Water dispenser not working",
            "Faulty defrost system",
            "Freezer not freezing",
            "Ice buildup in the fridge",
            "Door not closing properly",
            "Condenser fan malfunction",
            "Evaporator coil freezing",
            "Fridge cycling too frequently",
            "Refrigerant leaks",
            "High energy consumption",
          ]}
          imgUrl={"/fridge-new.png"}
        />
        <Service
          company={company}
          title={`${company} Dishwasher Repair`}
          desc={`A ${company} dishwasher that’s not functioning properly can disrupt your daily routine. Our technicians can quickly diagnose and repair common issues such as:`}
          points={[
            "Dishwasher not starting",
            "Water not draining",
            "Dishes not cleaning properly",
            "Unusual noises during operation",
            "Water leakage",
            "Door not closing properly",
            "Error codes displayed",
            "Control panel not responding",
            "Dishwasher not filling with water",
            "Cycle not completing",
            "Soap dispenser not opening",
            "Spray arms not working",
            "Electrical faults",
            "Unpleasant odors",
            "Dishwasher tripping the circuit breaker",
            "Excessive vibration",
            "Water temperature issues",
            "Racks not sliding smoothly",
            "Detergent residue on dishes",
            "Dishwasher not drying dishes",
          ]}
          imgUrl={"/dishwasher-new.png"}
        />
        <Service
          company={company}
          title={`${company} Oven Repair`}
          desc={`A malfunctioning oven can make meal preparation a challenge. Our technicians are experienced in ${company} oven repairs and can quickly resolve common issues such as:`}
          points={[
            "Oven not heating",
            "Oven not reaching the desired temperature",
            "Uneven cooking",
            "Oven door not closing properly",
            "Error codes displayed",
            "Unusual odors",
            "Oven light not working",
            "Control panel issues",
            "Self-cleaning cycle not working",
            "Burners not igniting",
            "Gas smell",
            "Oven overheating",
            "Oven not turning on",
            "Fan not working",
            "Oven door not opening",
            "Oven not maintaining temperature",
            "Broiler not working",
            "Timer not functioning",
            "Oven not cooking food evenly",
            "Oven not self-cleaning",
            "Oven not turning off",
          ]}
          imgUrl={"/oven-new.png"}
        />
        {/* Stove/Cooker if company is Bosch and Siemens else TV repair */}

        {company === "Bosch" || company === "Siemens" ? (
          <Service
            company={company}
            title={`${company} Stove/Cooker Repair`}
            desc={`A ${company} stove or cooker that’s not working properly can disrupt your meal preparation routine. Our technicians are skilled in ${company} stove and cooker repairs and can quickly address common issues such as:`}
            points={[
              "Burners not igniting",
              "Burners not heating properly",
              "Oven not heating",
              "Oven not reaching the desired temperature",
              "Uneven cooking",
              "Error codes displayed",
              "Control panel issues",
              "Self-cleaning cycle not working",
              "Gas smell",
              "Oven overheating",
              "Oven not turning on",
              "Fan not working",
              "Oven door not opening",
              "Oven not maintaining temperature",
              "Broiler not working",
              "Timer not functioning",
              "Oven not cooking food evenly",
              "Oven not self-cleaning",
              "Oven not turning off",
            ]}
            imgUrl={"/oven-new.png"}
          />
        ) : (
          <Service
            company={company}
            title={`${company} TV Repair`}
            desc={`A malfunctioning TV can be a major inconvenience, but our technicians are here to help. We specialize in ${company} TV repairs, addressing common issues such as:`}
            points={[
              "No power",
              "No picture",
              "No sound",
              "Lines on the screen",
              "Cracked screen",
              "TV turning off by itself",
              "Remote control not working",
              "TV not connecting to Wi-Fi",
              "TV not recognizing HDMI inputs",
              "TV not turning on",
              "TV displaying error messages",
              "TV displaying a blank screen",
              "TV displaying a distorted picture",
              "TV displaying a flickering picture",
              "TV displaying a frozen picture",
              "TV displaying a pixelated picture",
              "TV displaying a washed-out picture",
              "TV displaying colors incorrectly",
              "TV displaying lines on the screen",
              "TV displaying static",
              "TV displaying vertical lines",
            ]}
            imgUrl={"/tv-new.png"}
          />
        )}
        {/* Dryer repair */}
        <Service
          company={company}
          title={`${company} Dryer Repair`}
          desc={`A ${company} dryer that’s not functioning properly can leave you with damp clothes and a frustrating laundry situation. Our technicians are experienced in ${company} dryer repairs and can quickly resolve common issues such as:`}
          points={[
            "Dryer not heating",
            "Dryer not turning on",
            "Dryer not spinning",
            "Dryer not drying clothes",
            "Dryer not completing cycles",
            "Dryer not tumbling",
            "Dryer making unusual noises",
            "Dryer not venting properly",
            "Dryer not starting",
            "Dryer not heating up",
            "Dryer not turning off",
            "Dryer not spinning properly",
            "Dryer not drying clothes completely",
            "Dryer not heating enough",
            "Dryer not heating at all",
            "Dryer not turning",
            "Dryer not heating properly",
            "Dryer not heating up enough",
            "Dryer not heating up at all",
            "Dryer not heating well",
            "Dryer not heating properly",
          ]}
          imgUrl={"/dryer-new.png"}
        />
      </div>
    </div>
  );
}

const Service = ({ title, desc, points, imgUrl, company }) => {
  return (
    <div className={cn(
      "flex flex-col items-center w-full rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
      company === "Siemens" ? "border-2 border-siemensPrimary/10 hover:border-siemensPrimary/30" :
        company === "Bosch" ? "border-2 border-boschPrimary/10 hover:border-boschPrimary/30" :
          company === "Samsung" ? "border-2 border-samsungPrimary/10 hover:border-samsungPrimary/30" :
            company === "Lg" ? "border-2 border-lgPrimary/10 hover:border-lgPrimary/30" :
              "border-2 border-primary/10 hover:border-primary/30"
    )}>
      <div
        className="w-full h-64 sm:h-72"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6 flex flex-col gap-6 justify-between h-full w-full">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-black text-gray-900 leading-tight">{title}</h1>
          <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
          <ul className="grid gap-2 text-sm text-gray-700">
            {points.slice(0, 8).map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className={cn(
                  "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0",
                  company === "Siemens" ? "bg-siemensPrimary" :
                    company === "Bosch" ? "bg-boschPrimary" :
                      company === "Samsung" ? "bg-samsungPrimary" :
                        company === "Lg" ? "bg-lgPrimary" :
                          "bg-primary"
                )} />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <CallAndWhatsappButton company={company} />
      </div>
    </div>
  );
};
