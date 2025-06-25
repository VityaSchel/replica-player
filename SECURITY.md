# Replica Player security

Replica Player is actively audited by [GitHub dependency review action](https://github.com/actions/dependency-review-action).

The following security vulnerabilities are detected as false-positives and are pending to be resolved:

- `cookie  <0.7.0`

  `low: cookie accepts cookie name, path, and domain with out of bounds characters - https://github.com/advisories/GHSA-pxg6-pf52-xh8x`

  Blocked by https://github.com/sveltejs/kit/pull/13386
