import { Breadcrumbs } from "../components/SEO/Breadcrumbs";
import { StructuredData } from "../components/SEO/StructuredData";
import { AdvancedStructuredData } from "../components/SEO/AdvancedStructuredData";
import { SEOContent } from "../components/Content/SEOContent";
import type { AdvancedSEOData } from "@/src/utils/advanced-seo";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isHindi = lang === "hi";
  
  return {
    title: isHindi 
      ? "करियर – रम्मी गेम्स ऐप में नौकरियां | rummygamesapp.com"
      : "Careers – Jobs at Rummy Games App | rummygamesapp.com",
    description: isHindi
      ? "रम्मी गेम्स ऐप में करियर के अवसर। तकनीक, मार्केटिंग, गेम डेवलपमेंट और अधिक में नौकरियां।"
      : "Career opportunities at Rummy Games App. Jobs in technology, marketing, game development and more.",
    keywords: isHindi
      ? "करियर, नौकरियां, रम्मी गेम्स करियर, गेमिंग नौकरियां"
      : "careers, jobs, rummy games careers, gaming jobs, tech jobs, marketing jobs",
  };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === "hi";

  const seoData: Partial<AdvancedSEOData> = {
    title: isHindi
      ? "करियर – रम्मी गेम्स ऐप"
      : "Careers – Rummy Games App",
    description: isHindi
      ? "रम्मी गेम्स ऐप में करियर के अवसर खोजें।"
      : "Find career opportunities at Rummy Games App.",
    keywords: isHindi
      ? ["करियर", "नौकरियां", "गेमिंग"]
      : ["careers", "jobs", "gaming"],
    canonicalUrl: `https://www.rummygamesapp.com/${lang}/careers`,
    ogImage: "https://www.rummygamesapp.com/images/careers-og.jpg",
  };

  const jobOpenings = [
    {
      title: isHindi ? "सीनियर गेम डेवलपर" : "Senior Game Developer",
      department: isHindi ? "तकनीक" : "Technology",
      location: isHindi ? "मुंबई, भारत" : "Mumbai, India",
      type: isHindi ? "पूर्णकालिक" : "Full-time",
    },
    {
      title: isHindi ? "मार्केटिंग मैनेजर" : "Marketing Manager",
      department: isHindi ? "मार्केटिंग" : "Marketing",
      location: isHindi ? "दिल्ली, भारत" : "Delhi, India",
      type: isHindi ? "पूर्णकालिक" : "Full-time",
    },
    {
      title: isHindi ? "ग्राहक सहायता विशेषज्ञ" : "Customer Support Specialist",
      department: isHindi ? "सपोर्ट" : "Support",
      location: isHindi ? "रिमोट" : "Remote",
      type: isHindi ? "पूर्णकालिक" : "Full-time",
    },
  ];

  return (
    <>
      <StructuredData lang={lang} pageType="home" />
      <AdvancedStructuredData lang={lang} seoData={seoData} pageType="home" />
      <Breadcrumbs
        lang={lang}
        items={[
          { label: isHindi ? "होम" : "Home", href: `/${lang}` },
          { label: isHindi ? "करियर" : "Careers", href: `/${lang}/careers` },
        ]}
      />

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent headingLevel={1} heading={isHindi ? "करियर" : "Careers"}>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl">
              {isHindi
                ? "रम्मी गेम्स ऐप में शामिल हों और गेमिंग उद्योग में अपना करियर बनाएं। हम प्रतिभाशाली और उत्साही लोगों की तलाश कर रहे हैं।"
                : "Join Rummy Games App and build your career in the gaming industry. We're looking for talented and passionate individuals."}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: "💼",
                  title: isHindi ? "विविध अवसर" : "Diverse Opportunities",
                  description: isHindi
                    ? "तकनीक से लेकर मार्केटिंग तक कई भूमिकाएं"
                    : "Multiple roles from technology to marketing",
                },
                {
                  icon: "🚀",
                  title: isHindi ? "विकास" : "Growth",
                  description: isHindi
                    ? "अपने करियर को नई ऊंचाइयों पर ले जाएं"
                    : "Take your career to new heights",
                },
                {
                  icon: "🌟",
                  title: isHindi ? "सीखने का माहौल" : "Learning Environment",
                  description: isHindi
                    ? "निरंतर सीखने और विकास"
                    : "Continuous learning and development",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isHindi ? "खुली नौकरियां" : "Open Positions"}
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                      {isHindi ? "आवेदन करें" : "Apply Now"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </SEOContent>
        </div>
      </div>
    </>
  );
}

