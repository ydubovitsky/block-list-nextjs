import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { routes } from "@/shared/routes/routes";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {

    const router = useRouter();

    const { data, isLoading, isError } = useQuery({
      queryFn: authControllerGetSessionInfo,
      queryKey: ["session"],
      retry: 0,
      staleTime: 5 * 60 * 1000
    });

    if (isLoading) {
      return <UIPageSpinner/>
    }

    if(isError) {
      router.replace(routes.SIGN_IN);
    }

    return <Component {...props} />;
  };
}
