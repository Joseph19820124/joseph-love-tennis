"use client";

import { useTranslations } from "next-intl";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

export default function Home() {
  const t = useTranslations("home");
  const categories = [
    "serve",
    "forehand",
    "backhand",
    "volley",
    "footwork",
    "tactics",
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="from-primary/5 absolute inset-0 bg-gradient-to-b to-transparent" />
          <Container>
            <div className="relative z-10 text-center">
              <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
                {t("hero.title")}
                <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                  {" "}
                  {t("hero.titleHighlight")}
                </span>
              </h1>
              <p className="text-muted mx-auto mb-8 max-w-2xl text-xl">
                {t("hero.description")}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">{t("hero.getStarted")}</Button>
                <Button variant="ghost" size="lg">
                  {t("hero.browseVideos")}
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <Container>
            <h2 className="mb-12 text-center text-4xl font-bold">
              {t("features.title")}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card hover>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <span className="text-2xl">🎾</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {t("features.video.title")}
                </h3>
                <p className="text-muted">{t("features.video.description")}</p>
              </Card>

              <Card hover>
                <div className="bg-secondary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {t("features.practice.title")}
                </h3>
                <p className="text-muted">
                  {t("features.practice.description")}
                </p>
              </Card>

              <Card hover>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  {t("features.favorite.title")}
                </h3>
                <p className="text-muted">
                  {t("features.favorite.description")}
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Categories Section */}
        <section className="bg-surface/30 py-20">
          <Container>
            <h2 className="mb-12 text-center text-4xl font-bold">
              {t("categories.title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Badge key={category} variant="primary" className="text-base">
                  {t(`categories.${category}`)}
                </Badge>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <Container>
            <div className="from-primary/10 to-secondary/10 rounded-2xl bg-gradient-to-r p-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">{t("cta.title")}</h2>
              <p className="text-muted mb-8 text-xl">{t("cta.description")}</p>
              <Button size="lg">{t("cta.button")}</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
