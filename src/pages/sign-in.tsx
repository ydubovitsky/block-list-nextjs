import { SignInForm } from "@/features/auth";
import { UIFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UIHeader } from "@/shared/ui/ui-header";

type SignInPageProps = {};

export function SignInPage({}: SignInPageProps) {
  return (
    <UIFormPageLayout
      title="Sign In"
      form={<SignInForm />}
      header={<UIHeader />}
    />
  );
}
