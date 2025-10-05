<template>
  <UApp>
    <UDashboardGroup >
  <UDashboardSidebar resizable collapsible>
    <UContentNavigation :navigation="navigation" highlight />

    <template #footer="{ collapsed }">
      <UFieldGroup block orientation="horizontal">
        <UButton color="neutral" variant="subtle" label="Submit" />
        <UButton color="neutral" variant="outline" label="Cancel" />
      </UFieldGroup>
    </template>
  </UDashboardSidebar>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar>
        <template #leading> <UDashboardSidebarCollapse /> </template
      ></UDashboardNavbar>
    </template>

    <template #body>
      Issue with icons and
    </template>
  </UDashboardPanel>
    </UDashboardGroup>
  </UApp>
</template>
