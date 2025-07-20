<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
        <DialogDescription>
          Manage your account settings and preferences
        </DialogDescription>
      </DialogHeader>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- Username field -->
        <div class="space-y-2">
          <Label for="username">Username</Label>
          <Input
            id="username"
            v-model="formData.username"
            placeholder="Enter your username"
          />
        </div>
        
        <!-- Email field -->
        <div class="space-y-2">
          <Label for="email">Email</Label>
          <Input
            id="email"
            v-model="formData.email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        
        <!-- Notification toggle -->
        <div class="flex items-center justify-between">
          <div class="space-y-0.5">
            <Label for="notifications">Email Notifications</Label>
            <p class="text-sm text-muted-foreground">
              Receive email updates about your account
            </p>
          </div>
          <Switch
            id="notifications"
            v-model="formData.notifications"
          />
        </div>
        
        <DialogFooter>
          <Button type="button" variant="outline" @click="$emit('update:open', false)">
            Cancel
          </Button>
          <Button type="submit">
            Save Changes
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Switch } from '~/components/ui/switch'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/components/ui/dialog'
import { defaultUserSettings, type UserSettings } from '~/data/userSettings'

interface Props {
  open: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  'update:open': [value: boolean]
  'save': [data: UserSettings]
}>()

const formData = reactive<UserSettings>({ ...defaultUserSettings })

const handleSubmit = () => {
  emit('save', { ...formData })
  emit('update:open', false)
}
</script> 