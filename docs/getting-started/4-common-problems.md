# Common problems

If you encounter issues while getting started, you might find the solution amongst these common problems:

::: details Could not find NuGet packages
Bepinex may not be available on the official NuGet package repository. Adding `https://nuget.bepinex.dev/v3/index.json` to your NuGet sources in your IDE may solve the problem.
:::

::: details Patches are not applying / Plugin is being destroyed
Your plugin might be injected at the wrong time. Try setting `HideManagerGameObject = true` inside `BepInEx.cfg`.
:::