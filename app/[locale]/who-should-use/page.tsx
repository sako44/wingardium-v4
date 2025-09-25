import WhoShouldUse from "@/components/WhoShouldUse";

import { WhoShouldUseStructuredData } from "@/components/SEO/WhoShouldUseStructuredData";

export default function WhoShouldUsePage() {
  return (
    <>
      <WhoShouldUseStructuredData />
      <main>
        <WhoShouldUse />
      </main>
    </>
  );
}
