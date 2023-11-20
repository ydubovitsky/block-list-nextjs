import { SignUpForm } from "@/features/auth";
import { UIFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UIHeader } from "@/shared/ui/ui-header";

type SignUpPageProps = {};

export function SignUpPage({}: SignUpPageProps) {
  return (
    <UIFormPageLayout
      title="Sign Up"
      form={<SignUpForm />}
      header={<UIHeader />}
    />
  );
}
