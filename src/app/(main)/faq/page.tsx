import ClientAccordion from "@/components/clientAccordion";
import getFaqs from "@/lib/api/getFaqs";

export default async function FAQ() {
  const faqs = await getFaqs();
  return (
    <main className="container mx-auto py-5">
      <div className="text-center text-large font-extrabold mb-5">
        Frequenty Asked Questions
      </div>
      <ClientAccordion items={faqs} />
    </main>
  );
}
