"use client";

import * as React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Input } from "@/app/components/ui/input";
import { Toaster } from "sonner";
import {
  TrophyIcon,
  SearchIcon,
  PlusIcon,
  LayoutGridIcon,
  SparklesIcon,
  ArrowUpDownIcon,
  XIcon,
  FilterIcon,
  AwardIcon,
} from "lucide-react";
import { Skeleton, SkeletonText } from "@/app/components/ui/skeleton";
import CardCertificates from "@/app/components/CardCertificates";
import useCertificatesStore from "@/stores/useIsLoading";

export default function Page() {
  const [isClickedButton, setIsClickedButton] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("Semua");
  const [sortBy, setSortBy] = React.useState<"newest" | "oldest" | "title">(
    "newest"
  );

  const isFetch = useCertificatesStore((data) => data.isFetch);
  const totalCertificates = useCertificatesStore(
    (data) => data.totalCertificates
  );
  const categories = useCertificatesStore((data) => data.categories);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title="Certificates & Credentials" />
        <Toaster position="top-right" richColors />

        <div className="flex flex-col font-montserrat bg-slate-50/50 dark:bg-background pb-16">
          <div className="flex flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            {/* Header Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-blue-600 via-indigo-600 to-slate-900 p-6 md:p-8 text-white shadow-lg">
              <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                <TrophyIcon className="size-80 text-white" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-blue-100 border border-white/20">
                    <SparklesIcon className="size-3.5 text-amber-300" />
                    <span>Portofolio Prestasi & Sertifikasi Terverifikasi</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                    Certificates & Achievements
                  </h1>
                  <p className="text-blue-100/90 text-sm mt-4 sm:text-base leading-relaxed">
                    Koleksi penghargaan resmi, kejuaraan LKS, dan kredensial
                    teknis di bidang IT Network Systems Administration dan Web
                    Development.
                  </p>
                </div>

                <div
                  onClick={() => setIsClickedButton(!isClickedButton)}
                  className="flex items-center gap-3 shrink-0"
                >
                  <button className="cursor-pointer inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <PlusIcon className="size-4 stroke-[2.5]" />
                    <span>Tambah Sertifikat</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Section Toolbar: Search Bar + Category Dropdown + Sort Controls */}
            <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-lg flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <SearchIcon className="size-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari sertifikat..."
                  className="pl-9 pr-9 h-11 rounded-lg bg-background ring ring-[gray]/20 focus:ring-[gray]/50 transition-all duration-500 border-0"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                    title="Hapus pencarian"
                  >
                    <XIcon className="size-4" />
                  </button>
                )}
              </div>

              {/* Controls Group: Category Dropdown + Sort Dropdown + Grid Toggle */}
              <div className="flex flex-wrap items-center gap-3 border-t md:border-t-0 pt-3 md:pt-0 border-border/60">
                {/* Category Dropdown */}
                <div className="relative flex items-center">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="cursor-pointer appearance-none bg-muted/70 hover:bg-muted text-foreground text-xs font-medium pl-3 pr-8 py-2.5 rounded-lg border-0 outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="Semua">Semua Kategori</option>
                    {categories
                      .filter((c: string) => c !== "Semua")
                      .map((cat: string) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                  </select>
                  <FilterIcon className="size-3 text-muted-foreground absolute right-2.5 pointer-events-none" />
                </div>

                {/* Sort Dropdown */}
                <div className="relative flex items-center">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="cursor-pointer appearance-none bg-muted/70 hover:bg-muted text-foreground text-xs font-medium pl-3 pr-8 py-2.5 rounded-lg border-0 outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="newest">Terbaru</option>
                    <option value="oldest">Terlama</option>
                    <option value="title">Judul (A-Z)</option>
                  </select>
                  <ArrowUpDownIcon className="size-3 text-muted-foreground absolute right-2.5 pointer-events-none" />
                </div>

                <div className="flex items-center bg-muted/80 p-1 rounded-lg border border-border/40">
                  <button
                    title="Grid View"
                    className="cursor-pointer p-1.5 rounded-md transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <LayoutGridIcon className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Informasi Keterangan: Total Certificates Saja dengan Tulisan Grey & Icon Menarik */}
            {!isFetch && totalCertificates > 0 && (
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 px-1 py-0.5">
                <div className="size-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <AwardIcon className="size-3.5" />
                </div>
                <span>
                  Total Certificates:{" "}
                  <strong className="text-gray-700 dark:text-gray-200 font-semibold">
                    {totalCertificates}
                  </strong>
                </span>
              </div>
            )}
          </div>

          {/* Cards Container */}
          <div className="mx-auto px-9 w-full flex flex-wrap gap-6 justify-start">
            {isFetch &&
              Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="w-90">
                  <Skeleton className="w-90 h-45 rounded-xl bg-[gray]/40" />
                  <SkeletonText />
                </div>
              ))}
            <CardCertificates
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              isClickedButton={isClickedButton}
              setIsClickedButton={setIsClickedButton}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
            />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
