"use client";

import { exportButtons } from "@/constants/constants";
import { Recommendation, Sponsorship, TypeExportButtons } from "@/types";
import { useState } from "react";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

type Props<T> = {
     list: T[];
};

export default function ExportButtons<T>({ list }: Props<T>) {
     const [csvOpen, setCsvOpen] = useState(false);
     const [excelOpen, setExcelOpen] = useState(false);

     const [loading, setLoading] = useState(false);
     const [activeType, setActiveType] = useState<string>('');

     const handleCSVExport = async () => {
          try {
               setLoading(true);

               const csv = Papa.unparse(list);

               const blob = new Blob([csv], {
                    type: "text/csv;charset=utf-8;",
               });

               const link = document.createElement("a");
               link.href = URL.createObjectURL(blob);
               link.download = "export.csv";
               link.click();
          } finally {
               setLoading(false);
               setCsvOpen(false);
          }
     };

     const handleExcelExport = async () => {
          try {
               setLoading(true);

               const worksheet = XLSX.utils.json_to_sheet(list);
               const workbook = XLSX.utils.book_new();

               XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

               const excelBuffer = XLSX.write(workbook, {
                    bookType: "xlsx",
                    type: "array",
               });

               const file = new Blob([excelBuffer], {
                    type: "application/octet-stream",
               });

               saveAs(file, "export.xlsx");
          } finally {
               setLoading(false);
               setExcelOpen(false);
          }
     };

     return (
          <div className="flex flex-wrap items-center gap-4">
               {exportButtons?.map((item: TypeExportButtons, index: number) => {
                    const isCSV = item.type === "CSV";
                    const isExcel = item.type === "Excel";

                    return (
                         <div className="relative" key={index}>
                              {/* BUTTON */}
                              <button
                                   type="button"
                                   disabled={loading}
                                   onClick={() => {
                                        setActiveType(item?.type);
                                        if (isCSV) {
                                             setCsvOpen(!csvOpen);
                                             setExcelOpen(false);
                                             handleCSVExport()
                                        } else {
                                             setExcelOpen(!excelOpen);
                                             setCsvOpen(false);
                                             handleExcelExport()
                                        }
                                   }}
                                   className="flex items-center gap-2 px-5 py-3 cursor-pointer rounded-xl bg-[#FE9A86] text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95 disabled:opacity-60"
                              >
                                   {item.btnText}
                              </button>

                              {/* DROPDOWN */}
                              {((isCSV && csvOpen) || (isExcel && excelOpen)) && (
                                   <div className="absolute top-16 left-0 w-72 bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 z-50">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                             {item.exportOptionsText}
                                        </h3>

                                        {/* SKELETON LOADING */}
                                        {loading ? (
                                             <div className="space-y-3 animate-pulse">
                                                  <div className="h-10 bg-gray-200 rounded-lg" />
                                                  <div className="h-10 bg-gray-200 rounded-lg" />
                                                  <div className="h-10 bg-gray-200 rounded-lg" />
                                             </div>
                                        ) : (
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

                                                  <button

                                                       disabled={loading}
                                                       className="w-full py-3 rounded-xl bg-[#FE9A86] text-white font-semibold hover:opacity-90 transition-all disabled:opacity-60"
                                                  >
                                                       {loading ? "Exporting..." : item.downloadButton}
                                                  </button>
                                             </div>
                                        )}
                                   </div>
                              )}
                         </div>
                    );
               })}
          </div>
     );
}