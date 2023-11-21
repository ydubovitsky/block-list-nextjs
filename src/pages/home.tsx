import { useSessionQuery } from "@/entities/session/queries";
import { SignOutButton } from "@/features/auth";
import { UIButton } from "@/shared/ui/ui-button";
import { UIHeader } from "@/shared/ui/ui-header";
import { UILink } from "@/shared/ui/ui-link";
import { UISelectField } from "@/shared/ui/ui-select-field";
import { UISpinner } from "@/shared/ui/ui-spinner";
import { UITextField } from "@/shared/ui/ui-text-field";

export default function HomePage() {
  const { data } = useSessionQuery();

  const headerContent = () => (
    <div className="">
      {data?.email}
      <SignOutButton />
    </div>
  );

  return (
    <main className={`min-h-screen`}>
      <UIHeader content={headerContent()} />
      <UIButton variant="primary">primary</UIButton>
      <UIButton variant="secondary">secondary</UIButton>
      <UIButton variant="outlined">outlined</UIButton>
      <UIButton variant="primary" disabled>
        disabled
      </UIButton>
      <UITextField
        label="Text field"
        inputProps={{ placeholder: "Input text please" }}
      ></UITextField>
      <UISelectField
        label="Select"
        options={[
          { label: "hello", value: "12kddk1" },
          { label: "bye", value: "()=>" },
        ]}
        selectProps={{ placeholder: "Select Props" }}
      ></UISelectField>
      <UILink href={"/"}>Link to home page</UILink>
      <UISpinner className="text-teal-600 w-10 h-10"></UISpinner>
      <UIHeader />
    </main>
  );
}
