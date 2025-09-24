import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/özellikler", destination: "/features" },
      { source: "/kimler-kullanmali", destination: "/who-should-use" },
      { source: "/nasil-calisir", destination: "/services" },
      { source: "/planlar", destination: "/plans" },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
