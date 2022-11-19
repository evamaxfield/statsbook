# Statistical Analysis and Reporting

A [Jupyter Book](https://jupyterbook.org/en/stable/intro.html) to help you find and run statistical tests in both R and Python.

## Tests of Proportion Index

| Samples | Response Categories | N    | Test in R                                                                                                                 | Test in Python                                                                                                             |
|---------|---------------------|------|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| 1       | 2                   | ≤200 | [Binomial Test](./content/01-proportions/one-sample-tests-r.html#binomial-test)                                             | [Binomial Test](./content/01-proportions/one-sample-tests-py.html#binomial-test)                                             |
| 1       | ≥2                  | ≤200 | [Multinomial Test](./content/01-proportions/one-sample-tests-r.html#multinomial-test)                                       | [Multinomial Test](./content/01-proportions/one-sample-tests-py.html#multinomial-test)                                       |
| 1       | ≥2                  | >200 | [One-Sample Pearson Chi-Squared Test](./content/01-proportions/one-sample-tests-r.html#one-sample-pearson-chi-squared-test) | [One-Sample Pearson Chi-Squared Test](./content/01-proportions/one-sample-tests-py.html#one-sample-pearson-chi-squared-test) |
| 2       | ≥2                  | ≤200 | [Fisher's Exact Test](./content/01-proportions/two-sample-tests-r.html#fisher-s-exact-test) | [Fisher's Exact Test](./content/01-proportions/two-sample-tests-py.html#fisher-s-exact-test) |
| 2       | ≥2                  | >200 | [G-Test](./content/01-proportions/two-sample-tests-r.html#g-test) | [G-Test](./content/01-proportions/two-sample-tests-py.html#g-test) |
| 2       | ≥2                  | >200 | [Two-Sample Pearson Chi-Squared Test](./content/01-proportions/two-sample-tests-r.html#two-sample-pearson-chi-squared-test) | [Two-Sample Pearson Chi-Squared Test](./content/01-proportions/two-sample-tests-py.html#two-sample-pearson-chi-squared-test) |

## Tests of Assumption Index

| Assumption | Context of Use | Test in R                                                                                                                 | Test in Python                                                                                                             |
|---------|---------------------|-----------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Normality       | t-test, ANOVA, LM, LMM                   | [Shapiro-Wilk Test (on responses)](./content/02-assumptions-and-distributions/anova-r.html#shapiro-wilk-test-on-responses)                                             | [Shapiro-Wilk Test (on responses)](./content/content/02-assumptions-and-distributions/anova-py.html#shapiro-wilk-test-on-responses)                                             |
| Normality       | t-test, ANOVA, LM, LMM                   | [Shapiro-Wilk Test (on residuals)](./content/02-assumptions-and-distributions/anova-r.html#shapiro-wilk-test-on-residuals)                                             | [Shapiro-Wilk Test (on residuals)](./content/content/02-assumptions-and-distributions/anova-py.html#shapiro-wilk-test-on-residuals)                                             |
| Normality       | t-test, ANOVA, LM, LMM                   | [Anderson-Darling Test (on responses)](./content/02-assumptions-and-distributions/anova-r.html#anderson-darling-test-on-responses)                                             | [Anderson-Darling Test (on responses)](./content/02-assumptions-and-distributions/anova-py.html#anderson-darling-test-on-responses)                                             |
| Normality       | t-test, ANOVA, LM, LMM                   | [Anderson-Darling Test (on residuals)](./content/02-assumptions-and-distributions/anova-r.html#anderson-darling-test-on-residuals)                                             | [Anderson-Darling Test (on residuals)](./content/02-assumptions-and-distributions/anova-py.html#anderson-darling-test-on-residuals)                                             |
| Homoscedasticity (Homogeneity of Variance)       | t-test, ANOVA, LM, LMM                   | [Levene's Test](./content/02-assumptions-and-distributions/anova-r.html#levene-s-test)                                             | [Levene's Test](./content/02-assumptions-and-distributions/anova-py.html#levene-s-test)                                             |
| Homoscedasticity (Homogeneity of Variance)       | t-test, ANOVA, LM, LMM                   | [Brown-Forsythe Test](./content/02-assumptions-and-distributions/anova-r.html#brown-forsythe-test)                                             | [Brown-Forsythe Test](./content/02-assumptions-and-distributions/anova-py.html#brown-forsythe-test)                                             |
| Sphericity       | Repeated Measures ANOVA                   | [Mauchly's Test of Sphericity](./content/02-assumptions-and-distributions/anova-r.html#mauchly-s-test-of-sphericity)                                             | [Mauchly's Test of Sphericity](./content/02-assumptions-and-distributions/anova-py.html#mauchly-s-test-of-sphericity)                                             |

## Tests of Distributions Index

| Distribution | Parameterization | Test in R | Test in Python |
|--------------|------------------|-----------|----------------|
| Normal | mean (μ): `mean`, standard deviation (σ): `sd` | [KS Test for Normal Distribution](./content/02-assumptions-and-distributions/distributions-r.html#normal-distribution) | [KS Test for Normal Distribution](./content/02-assumptions-and-distributions/distributions-py.html#normal-distribution) |
| Lognormal | mean (μ): `meanlog`, standard deviation (σ): `sdlog` | [KS Test for Lognormal Distribution](./content/02-assumptions-and-distributions/distributions-r.html#lognormal-distribution) | [KS Test for Lognormal Distribution](./content/02-assumptions-and-distributions/distributions-py.html#lognormal-distribution) |
| Poisson | lambda (λ): `lambda` | [KS Test for Poisson Distribution](./content/02-assumptions-and-distributions/distributions-r.html#poisson-distribution) | [KS Test for Poisson Distribution](./content/02-assumptions-and-distributions/distributions-py.html#poisson-distribution) |
| Negative Binomial | theta (θ): `theta`, mu (μ): `mu` | [KS Test for Negative Binomial Distribution](./content/02-assumptions-and-distributions/distributions-r.html#negative-binomial-distribution) | [KS Test for Negative Binomial Distribution](./content/02-assumptions-and-distributions/distributions-py.html#negative-binomial-distribution) |
| Exponential | rate (λ): `rate` | [KS Test for Exponential Distribution](./content/02-assumptions-and-distributions/distributions-r.html#exponential-distribution) | [KS Test for Exponential Distribution](./content/02-assumptions-and-distributions/distributions-py.html#exponential-distribution) |
| Gamma | shape (α): `shape`, rate (β): `rate` | [KS Test for Gamma Distribution](./content/02-assumptions-and-distributions/distributions-r.html#gamma-distribution) | [KS Test for Gamma Distribution](./content/02-assumptions-and-distributions/distributions-py.html#gamma-distribution) |


## Full Table of Contents

```{tableofcontents}
```
