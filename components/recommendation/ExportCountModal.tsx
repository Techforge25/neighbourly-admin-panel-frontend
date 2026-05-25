import { memo } from "react";

interface Props {
     type: string;
     exportOptionsText: string;
     downloadButton: string;
     excelOpen: boolean;
     csvOpen: boolean;
}

function ExportCountModalComponent({
     csvOpen,
     excelOpen,
     type,
     exportOptionsText,
     downloadButton,
}: Props) {
     if (
          !(
               (type === "CSV" && csvOpen) ||
               (type === "Excel" && excelOpen)
          )
     ) {
          return null;
     }

     return (
          <div
               className={`absolute top-16 ${type === "CSV" ? "left-0" : "right-0"
                    } w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200`}
          >
               <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {exportOptionsText}
               </h3>

               <div className="space-y-4">
                    <div>
                         <label className="block text-sm font-medium text-gray-600 mb-1">
                              Page
                         </label>

                         <input
                              type="number"
                              placeholder="Enter page number"
                              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FE9A86]"
                         />
                    </div>

                    <div>
                         <label className="block text-sm font-medium text-gray-600 mb-1">
                              Limit
                         </label>

                         <input
                              type="number"
                              placeholder="Enter limit"
                              className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FE9A86]"
                         />
                    </div>

                    <button className="w-full py-3 rounded-xl bg-[#FE9A86] text-white font-semibold hover:opacity-90 transition-all">
                         {downloadButton}
                    </button>
               </div>
          </div>
     );
}

const ExportCountModal = memo(ExportCountModalComponent);

export default ExportCountModal;