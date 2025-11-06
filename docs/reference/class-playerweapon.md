# Class PlayerWeapon

::: warning
🧹 Stub: Incomplete and may contain errors
:::

Handles player weapon behaviours. All weapons appear to be hardcoded into this file.

Inside `Update()`, Inputs are polled, various states are handled and if an attack should be performed, `DoAttackRoutine()` is started as a coroutine.

Some weapon attacks are additional Coroutines like `DoAxeHeavyAttack()` which yield in a while loop while charging the attack.

Many attacks are complimented by animation events handled in `HandleAnimationStateEvent()`.\
Often times `Assets/Prefabs/Enemies/Weapons/PlayerSwipe{0}.prefab` is instantiated here via `CreateSwipe()`.

In addition to the Swipe object, other objects may be created inside `AttackDealDamage` based on the weapon type (`this.playerFarming.CurrentWeaponInfo.WeaponData.Combos[this.CurrentCombo].SwipeObject`). A camera shake is also triggered here.

The class also provides a method to perform a slow motion effect (`DoSlowMo`) by modifying the time scale and camera zoom via the `GameManager` class. This method is mostly called by Enemy Boss classes.
