import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

export function formatTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date)
}

export function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

export function generateId() {
  return Math.random().toString(36).substr(2, 9)
}

export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function throttle(func, limit) {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidUrl(url) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function getInitials(name) {
  return name
    .split(" ")
    .map(part => part.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2)
}

export function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes"
  
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
  
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
}

export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function arrayToObject(array, key) {
  return array.reduce((obj, item) => {
    obj[item[key]] = item
    return obj
  }, {})
}

export function groupBy(array, key) {
  return array.reduce((groups, item) => {
    const group = item[key]
    groups[group] = groups[group] || []
    groups[group].push(item)
    return groups
  }, {})
}

export function sortBy(array, key, direction = "asc") {
  return [...array].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]
    
    if (direction === "asc") {
      return aVal < bVal ? -1 : aVal > bVal ? 1 : 0
    } else {
      return aVal > bVal ? -1 : aVal < bVal ? 1 : 0
    }
  })
}

export function unique(array) {
  return [...new Set(array)]
}

export function uniqueBy(array, key) {
  const seen = new Set()
  return array.filter(item => {
    const value = item[key]
    if (seen.has(value)) {
      return false
    }
    seen.add(value)
    return true
  })
}

export function isEmpty(value) {
  if (value == null) return true
  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0
  }
  if (typeof value === "object") {
    return Object.keys(value).length === 0
  }
  return false
}

export function pick(obj, keys) {
  return keys.reduce((result, key) => {
    if (key in obj) {
      result[key] = obj[key]
    }
    return result
  }, {})
}

export function omit(obj, keys) {
  const result = { ...obj }
  keys.forEach(key => delete result[key])
  return result
}