
'use client';

import React from 'react';

export default function AndroidView() {
    return (
        <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center p-4 sm:p-8">
            <div className="relative">
                {/* Android Phone Frame */}
                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[700px] w-[340px] shadow-xl">
                    <div className="w-[148px] h-[18px] bg-gray-800 top-0 left-1/2 -translate-x-1/2 rounded-b-[1rem] absolute"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
                        <iframe
                            src="/"
                            className="w-full h-full border-none"
                            title="Marina Mobile View"
                        />
                    </div>
                </div>

                {/* Label */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center w-full">
                    <p className="text-[#d4af37] font-black uppercase tracking-widest text-sm">Android Developer Preview</p>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-tighter mt-1">Simulating Pixel 7 Pro Viewport</p>
                </div>
            </div>
        </div>
    );
}
