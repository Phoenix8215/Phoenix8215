<img align="right" src="https://github-readme-stats.vercel.app/api?username=phoenix8215&show_icons=true&icon_color=CE1D2D&text_color=718096&bg_color=ffffff&hide_title=true" />
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=phoenix8215&layout=compact)

```c++
struct Offering {
  void *doc;
  void *code;
  void *paper;
  void *cv;
  void *ppt;
  void *question;
};

Project * getExcellentOpenSource(CodeWorld *w) {
  
  if (your.interest) {
    if (email("fengzhe8215@foxmail.com") || submit(issue)) {
      return getYourExcellentOpenSource();
    }
  }
  return top(w->star) == NULL ? top(w->fork) : top(w->star);
}

struct Offering * produce(Project *p) {

  Offering *o = malloc(sizeof(struct Offering));
  o->doc = arrangeDocument(p);
  o->code = produceExampleCode(p);
  o->cv = produceVideo(p);
  o->paper = arrangePaper(p);// https://cvpr.thecvf.com/
  o->ppt = arrangePPTpdf(p);
  o->question = arrangeQuestionList(p);
  
  return o;
}

void produceRepo(struct Offering *o) {
  setRepoOrgAutoXCar(o); 
  free(o);
}

int main() {
  CodeWorld world;  // network, OS,computer vision etc. (code with c/c++)
  
#pragma omp parallel num_threads(worker_nums)  
  {
    while(1) {
      Project *p = getExcellentOpenSource(world);
      //Project: slam, cv, cuda, openmp, bev, ros etc.
      struct Offering *o = produce(p);
      produceRepo(o);
    }
  }
}
```

<div align="center" >

