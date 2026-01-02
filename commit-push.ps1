param([string]$msg)

# 1. Detect submodule path (first entry in .gitmodules)
$submodulePath = Get-Content ".gitmodules" |
                 Select-String "path\s*=" |
                 ForEach-Object { ($_ -split " = ")[1].Trim() }

if (-not $submodulePath) {
  Write-Host "No submodule found." ; exit 1
}

###########################################################################
function ACP-All {
  param([string]$message)

  git diff --cached --quiet
  if ($LASTEXITCODE -ne 0) {
    git commit -m $message       ; if ($LASTEXITCODE) { exit 1 }
    git push                     ; if ($LASTEXITCODE) { exit 1 }
  } else {
    Write-Host "No changes to commit here."
  }
}
###########################################################################

# 2. SUBMODULE
Write-Host "Processing submodule '$submodulePath'..."
Push-Location $submodulePath

# Check for detached HEAD
$currentBranch = git branch --show-current
if (-not $currentBranch) {
    Write-Warning "Submodule is in 'Detached HEAD' state."
    $choice = Read-Host "Do you want to checkout 'main' and continue? (y/n)"
    if ($choice -eq 'y') {
        git checkout main
    } else {
        Write-Error "Cannot push from detached HEAD. Please fix submodule state manually."
        exit 1
    }
}

git add -A
ACP-All $msg
Pop-Location

# 3. MAIN REPO
Write-Host "Processing main repo..."
git add -A
ACP-All "Update submodule + misc: $msg"

Write-Host "All done!"