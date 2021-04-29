#include <piksel/baseapp.hpp>

class MyApp : public piksel::BaseApp {
public:
  MyApp() : BaseApp(200, 150) { }

  void draw(piksel::Graphics& g) {
    // set the color of the "canva"
    auto BG_COLOR = glm::vec4(0.2, 0.2, 0.2, 1);
    g.background(BG_COLOR);
    // print some white text
    auto TEXT_COLOR = glm::vec4(1, 1, 1, 1);
    g.fill(TEXT_COLOR);
    g.text("Hello, World!", 50, 50);
    // draw shapes with different colors
    auto RED = glm::vec4(0.7, 0, 0, 1);
    g.fill(RED);
    g.rect(20, 70, 60, 60);
    auto GREEN = glm::vec4(0, 0.7, 0, 1);
    g.fill(GREEN);
    g.ellipse(150, 100, 70, 70);
  }
};

int main() {
  MyApp app;
  app.start();
  return EXIT_SUCCESS;
}
