import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

export default function Home() {
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
                提升你的
                <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
                  {" "}
                  网球技能
                </span>
              </h1>
              <p className="text-muted mx-auto mb-8 max-w-2xl text-xl">
                汇聚全球顶尖网球教练的教学视频，个性化练习记录，
                科学系统地提升你的球技
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg">开始学习</Button>
                <Button variant="ghost" size="lg">
                  浏览视频库
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <Container>
            <h2 className="mb-12 text-center text-4xl font-bold">核心功能</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card hover>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <span className="text-2xl">🎾</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">精选教学视频</h3>
                <p className="text-muted">
                  从YouTube精选优质网球教学内容，涵盖发球、正手、反手等各项技术
                </p>
              </Card>

              <Card hover>
                <div className="bg-secondary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">练习记录追踪</h3>
                <p className="text-muted">
                  记录每次练习，分析进步轨迹，数据可视化让提升一目了然
                </p>
              </Card>

              <Card hover>
                <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">个性化收藏</h3>
                <p className="text-muted">
                  收藏喜欢的视频，构建专属学习路径，随时回顾关键技术要点
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Categories Section */}
        <section className="bg-surface/30 py-20">
          <Container>
            <h2 className="mb-12 text-center text-4xl font-bold">技术分类</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["发球", "正手", "反手", "网前", "步法", "战术"].map(
                (category) => (
                  <Badge key={category} variant="primary" className="text-base">
                    {category}
                  </Badge>
                )
              )}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <Container>
            <div className="from-primary/10 to-secondary/10 rounded-2xl bg-gradient-to-r p-12 text-center">
              <h2 className="mb-4 text-4xl font-bold">准备好开始了吗？</h2>
              <p className="text-muted mb-8 text-xl">
                立即注册，开启你的网球进阶之旅
              </p>
              <Button size="lg">免费注册</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
