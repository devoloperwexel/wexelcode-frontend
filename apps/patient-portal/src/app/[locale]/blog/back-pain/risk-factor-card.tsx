import { ReactNode } from "react";

interface RiskFactorCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const RiskFactorCard = ({
  icon,
  title,
  description,
}: RiskFactorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#a51008]">
      <div className="flex items-center mb-4">
        <div className="bg-red-50 p-3 rounded-full text-[#a51008] mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {/* <style jsx>{`
          .border-t-4 {
            transition: transform 0.3s ease;
          }
          .border-t-4:hover {
            transform: translateY(-5px);
          }
        `}</style> */}
    </div>
  );
};
