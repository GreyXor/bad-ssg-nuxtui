<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar>
        <template #leading> <UDashboardSidebarCollapse /> </template
      ></UDashboardNavbar>
    </template>

    <template #body>
      <NuxtPage />
    </template>
  </UDashboardPanel>
</template>
