param(
    [string]$RepoUrl = "https://github.com/Andremelloo/Custo-RTG.git"
)

$gitExe = 'C:\Users\amelo\AppData\Local\GitHubDesktop\app-3.6.6\resources\app\git\cmd\git.exe'
$repoDir = 'C:\Users\amelo\Downloads\Projeto_Custo_RTG_github\Custo_RTG_COMPLETO'

Write-Host "Configurando remote origin para: $RepoUrl"

# Verifica se origin ja existe
$currentRemote = & $gitExe -C $repoDir remote get-url origin 2>$null
if ($currentRemote) {
    & $gitExe -C $repoDir remote set-url origin $RepoUrl
} else {
    & $gitExe -C $repoDir remote add origin $RepoUrl
}

Write-Host "Remote configurado com sucesso!"
& $gitExe -C $repoDir remote -v

Write-Host ""
Write-Host "Para enviar para o GitHub, certifique-se de que o repositorio foi criado em sua conta no GitHub e execute:"
Write-Host "git push -u origin main"
Write-Host ""
Write-Host "Ou abra o GitHub Desktop, adicione esta pasta (File > Add Local Repository) e clique em 'Publish Repository'!"
