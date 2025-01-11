register("spawnParticle", (particle, type, event) => {
  if (particle.toString().includes('EntityReddustFX') && Player.armor.getChestplate().getName().includes('Chestplate of Divan')) {
    cancel(event);
  }
})
