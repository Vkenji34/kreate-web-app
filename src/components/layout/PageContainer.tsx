import React, { forwardRef } from "react";
import { cn } from "~/lib/utils";
// import { HeadMetaData } from "./HeadMetaData";
import { Header } from "./Header";
import { Footer } from "./Footer";

type PageContainerProps = {
  withHeader?: boolean;
  withFooter?: boolean;
};

export const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & PageContainerProps
>(
  (
    { className, children, withHeader = true, withFooter = true, ...props },
    ref,
  ) => {
    return (
      <div className="h-full w-full">
        {/* <HeadMetaData /> */}
        {withHeader && <Header />}
        <main ref={ref} className={cn("flex flex-col pb-10", className)} {...props}>
          {children}
        </main>
        {withFooter && <Footer />}
      </div>
    );
  },
);

PageContainer.displayName = "PageContainer";
