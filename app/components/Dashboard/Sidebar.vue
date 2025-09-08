<template>
  <UDashboardSidebar resizable collapsible>
    <UContentNavigation :navigation="navigation" highlight />

    <template #footer="{ collapsed }">
      <UFieldGroup block orientation="horizontal">
        <UButton color="neutral" variant="subtle" label="Submit" />
        <UButton color="neutral" variant="outline" label="Cancel" />
      </UFieldGroup>
    </template>
  </UDashboardSidebar>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const navigation = inject<Ref<ContentNavigationItem[]>>("content");
</script>
