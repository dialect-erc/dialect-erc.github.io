---
layout: post
image: mme-jbaan2022.jpg
---


The problem of *human label variation* arises in AI, when human annotators assign different valid labels to the same item. This is a ubiquitous problem in AI in general, and especially pronounced in problems where language is involved, as language is ambiguous (amongst others). Yet, most AI systems today are trained on the assumption that there exists a single *ground truth*, or, a single valid interpretation per item. 

We presented [several papers at EMNLP 2022](https://twitter.com/MaiNLPlab/status/1600795488605073409) in Abu Dhabi which challenge this assumption of a single ground truth and look at human label variation. Here are some selected highlights:

- Barbara Plank. [*The "Problem” of Human Label Variation: On Ground Truth in Data, Modeling and Evaluation.*](https://aclanthology.org/2022.emnlp-main.731/) In Proceedings of the Conference on Empirical Methods in Natural Language Processing, EMNLP 2022.

- Joris Baan, Wilker Aziz, Barbara Plank and Raquel Fernández. [*Stop Measuring Calibration When Humans Disagree*.](https://aclanthology.org/2022.emnlp-main.124/) In Proceedings of the Conference on Empirical Methods in Natural Language Processing, EMNLP 2022. 

The first is a position paper on the problem of human label variation. The second looks at calibration under the lens of human label variation: Calibration is a popular framework to evaluate whether a neural networks knows when it does not know - i.e., its predictive probabilities are a good indication of how likely a prediction is to be correct. Correctness is commonly estimated against the human majority class (a single ground truth). What does this mean in light of human label variation? Read up here:


[Img credits to Max-Müller Eberstein](https://twitter.com/mxmeij/status/1601832608073388032)
