# CS for Hackers Week 1 Homework

[The assignment](http://cs4h.com/l/week-01/lecture-2#slide35)

Based on: [“Gallery of Processor Cache Effects”](http://igoro.com/archive/gallery-of-processor-cache-effects/) by
Igor Ostrovsky. But *in JavaScript!* And using not only arrays, but `ArrayBuffer`s too!

## How to Run

```bash
$ npm install
$ npm start
```

## Sample Output

```
Domenic@COGNUS ~/Dropbox/Programming/GitHub/cs4h/week-01 (master)
$ npm start

> csh-week-01@0.0.0 start c:\Users\Domenic\Dropbox\Programming\GitHub\cs4h\week-01
> matcha index.js


                      Access every k-th entry [arrays]
              43 op/s ⨠ k = 1
              24 op/s ⨠ k = 2
              14 op/s ⨠ k = 4
              31 op/s ⨠ k = 8
              58 op/s ⨠ k = 16
              92 op/s ⨠ k = 32
             137 op/s ⨠ k = 64
             197 op/s ⨠ k = 128
             371 op/s ⨠ k = 256
             762 op/s ⨠ k = 512
           1,397 op/s ⨠ k = 1024

                      Access every k-th entry [ArrayBuffers]
              66 op/s ⨠ k = 1
             138 op/s ⨠ k = 2
             264 op/s ⨠ k = 4
             495 op/s ⨠ k = 8
             755 op/s ⨠ k = 16
           1,033 op/s ⨠ k = 32
           1,795 op/s ⨠ k = 64
           3,825 op/s ⨠ k = 128
           5,200 op/s ⨠ k = 256
           9,496 op/s ⨠ k = 512
           7,059 op/s ⨠ k = 1024

                      Find the cache line size [arrays]
              37 op/s ⨠ size = 1
              37 op/s ⨠ size = 2
              37 op/s ⨠ size = 4
              37 op/s ⨠ size = 8
              35 op/s ⨠ size = 16
              33 op/s ⨠ size = 32
              33 op/s ⨠ size = 64
              22 op/s ⨠ size = 128
              22 op/s ⨠ size = 256
              19 op/s ⨠ size = 512
              17 op/s ⨠ size = 1024
              17 op/s ⨠ size = 2048
              20 op/s ⨠ size = 4096
              20 op/s ⨠ size = 8192
              20 op/s ⨠ size = 16384

                      Find the cache line size [ArrayBuffers]
              41 op/s ⨠ size = 1
              41 op/s ⨠ size = 2
              41 op/s ⨠ size = 4
              34 op/s ⨠ size = 8
              39 op/s ⨠ size = 16
              41 op/s ⨠ size = 32
              36 op/s ⨠ size = 64
              31 op/s ⨠ size = 128
              30 op/s ⨠ size = 256
              24 op/s ⨠ size = 512
              26 op/s ⨠ size = 1024
              26 op/s ⨠ size = 2048
              35 op/s ⨠ size = 4096
              35 op/s ⨠ size = 8192
              45 op/s ⨠ size = 16384

                      Demonstrate instruction-level parallelism [arrays]
              40 op/s ⨠ Modifying the same array element
              59 op/s ⨠ Modifying two different array elements

                      Demonstrate instruction-level parallelism [ArrayBuffers]
              49 op/s ⨠ Modifying the same array element
              96 op/s ⨠ Modifying two different array elements


  Suites:  6
  Benches: 56
  Elapsed: 152132 ms
  ```
