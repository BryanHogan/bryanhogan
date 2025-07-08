param([string]$msg)

# Get submodule path from .gitmodules
$submodulePath = Get-Content ".gitmodules" | Select-String "path = " | ForEach-Object { ($_ -split " = ")[1].Trim() }

if (-not $submodulePath) {
  Write-Host "❌ No submodule found."
  exit 1
}

# Commit and push submodule
Push-Location $submodulePath
git add -A
$subChanges = git diff --cached
if ($subChanges) {
  git commit -m $msg
  git push
}
Pop-Location

# Commit and push main repo
git add $submodulePath
$mainChanges = git diff --cached
if ($mainChanges) {
  git commit -m "Update submodule: $msg"
  git push
}