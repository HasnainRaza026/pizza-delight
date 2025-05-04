import { Outlet, useMatch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Header from "../ui/layout/Header";
import Footer from "../ui/layout/Footer";

function MainLayout() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 0,
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
      },
    },
  });

  // this will match /menu, /menu/123, etc.
  const isMenuRoute = useMatch({ path: "/menu/*", end: false });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Header type={isMenuRoute ? "withSearch" : "default"} />
        <Outlet />
        {!isMenuRoute && <Footer />}
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default MainLayout;
