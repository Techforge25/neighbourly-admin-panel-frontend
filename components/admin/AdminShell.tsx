"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MdLogout, MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { AdminShellProps, SignOutModalRef } from "@/types";
import { navItems } from "@/constants/constants";
import SignOutModal from "../ui/SignOutModal";
import Footer from "./Footer";
import { logout } from "@/services/auth";

export function AdminShell({
  headerTitle,
  headerDate,
  userName = "Admin",
  children,
}: AdminShellProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const userImage = "/images/avatar.png";

  // 🔑 Sign-out modal ref
  const signOutModalRef = useRef<SignOutModalRef>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/dashboard/recommendation")
      return pathname.startsWith("/dashboard/recommendation");
    if (href === "/dashboard/sponsorship") return pathname.startsWith("/dashboard/sponsorship");
    return pathname === href;
  };

  // 🔑 Step 1: Sign out click → open modal (don't navigate yet)
  const handleSignOutClick = async (e: React.MouseEvent) => {
    e.preventDefault(); // prevent <Link> navigation
    setOpen(false); // close mobile sidebar if open
    await logout()
    signOutModalRef.current?.open();
  };

  // 🔑 Step 2: Modal confirmed → actual sign out logic
  const handleSignOutConfirm = () => {
    console.log("✅ User signed out");
    // your cleanup logic:
    // localStorage.removeItem("token");
    // await signOutApi();
    router.push("/");
  };

  function NavList({ mobile = false }: { mobile?: boolean }) {
    return (
      <nav className="flex flex-col gap-1" aria-label="Main navigation">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            onClick={() => mobile && setOpen(false)}
            className={`flex items-center gap-2.5 rounded-xl px-[12px] py-[12px] font-poppins text-[1rem] transition-colors ${isActive(href)
              ? "bg-bg-primary text-white shadow-md"
              : "text-text-primary"
              }`}
          >
            <Icon
              size={24}
              className="w-6 h-6 shrink-0 opacity-95"
              aria-hidden
            />
            {label}
          </Link>
        ))}

        <div className="absolute bottom-0 left-0 right-0">
          <div className="my-6 h-px w-full bg-border-primary" />
          {/* 🔑 Sign-out: button instead of Link */}
          <button
            type="button"
            onClick={handleSignOutClick}
            className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-text-primary hover:bg-surface-muted-secondary transition"
          >
            <MdLogout className="h-5 w-5 shrink-0" aria-hidden />
            Sign out
          </button>
        </div>
      </nav>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Mobile sidebar overlay */}
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        id="admin-sidebar"
        className={`fixed left-0 top-0 z-50 flex h-full w-[min(18rem,100vw)] flex-col border-r border-border-primary bg-surface text-white shadow-xl transition-transform duration-200 lg:z-30 lg:w-[278px] lg:translate-x-0 lg:shadow-none ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        <div className="flex h-20 shrink-0 items-center justify-between px-5 border-b border-border-primary">
          <Link href="/dashboard" className="text-lg font-semibold tracking-tight">
            <Image
              src={"/images/logo.png"}
              alt="suburbSays"
              width={1000}
              height={1000}
              priority
              className="lg:w-[12.688rem] w-[10.344rem]"
            />
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 lg:hidden hover:bg-white/10"
            onClick={() => setOpen(false)}
            aria-label="Close sidebar"
          >
            <RxCross2 className="h-5 w-5 text-text-primary cursor-pointer" />
          </button>
        </div>
        <div className="flex flex-1 flex-col px-5 py-6 cursor-pointer relative">
          <NavList />
        </div>
      </aside>

      {/* Main */}
      <div className="min-h-screen lg:pl-[278px]">
        <header className="sticky top-0 z-20 bg-surface flex h-[72px] items-center justify-between gap-4 bg-surface/95 px-4 border border-border-primary sm:h-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="-ml-2 inline-flex rounded-lg p-2 text-text-secondary hover:bg-brand-line lg:hidden"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="admin-sidebar"
              aria-label="Open menu"
            >
              <MdOutlineMenu className="h-6 w-6 cursor-pointer" />
            </button>
            <div>
              <p className="font-manrope sm:text-[1.25rem] text-[1rem] font-semibold text-text-primary">
                {headerTitle}
              </p>
              <p className="font-poppins text-text-para text-[0.75rem]">
                {headerDate}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium leading-tight text-brand-navy">
                {userName}
              </p>
            </div>
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-bg-primary/70 text-sm font-semibold text-surface ring-2 ring-brand-line sm:h-11 sm:w-11"
              aria-hidden
            >
              {userImage ? (
                <Image
                  src={userImage}
                  alt={userName}
                  width={48}
                  height={48}
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                userName
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()
              )}
            </div>
          </div>
        </header>

        <main className="bg-foreground px-4 py-8 sm:px-6 lg:px-10">
          {children}
        </main>
      </div>
      <Footer />

      {/* 🔑 Sign-out Modal — mounted at shell level */}
      <SignOutModal
        ref={signOutModalRef}
        onConfirm={handleSignOutConfirm}
      />
    </div>
  );
}